CREATE OR REPLACE FUNCTION ext_data.add_new(
    p_unknown_id integer,
    p_date date,
    p_amount numeric,
    p_month integer,
    p_year integer,
    p_land character varying,
    p_charge_code character varying,
    p_budget character varying,
    p_budget_item character varying)
  RETURNS void AS
$BODY$
declare err_text character varying;
declare p_land_id integer;
declare p_charge_type_id integer;
declare p_invoice_id integer;
declare p_budget_id integer;
declare p_budget_item_id integer;
begin
  err_text = '';
  if (p_unknown_id != -1) then
    select dt, amount, month, year, land, charge_code, budget, budget_item from ext_data.unknown where id=p_unknown_id
      into p_date, p_amount, p_month, p_year, p_land, p_charge_code, p_budget, p_budget_item;
  end if;
  if (p_land is not null) then
     select id from lands.lands where num=p_land into p_land_id;
     if p_land_id is not null then
        select id from charges.types where code=p_charge_code into p_charge_type_id;
        if (p_charge_type_id is not null) then
          if (p_month is not null)and(p_year is not null) then
             select b_i.id from balances.invoices b_i
                where (b_i.land_id=p_land_id)and
                  (b_i.charge_type_id=p_charge_type_id)and
                  (b_i.month=p_month)and
                  (b_i.year=p_year)
                into p_invoice_id;
             if (p_invoice_id is not null) then
               insert into balances.pays (land_id, amount, dt, charge_type_id, start_invoice_id)
                 values (p_land_id, p_amount, p_date, p_charge_type_id, p_invoice_id);
             else
                err_text='extData.errors.invoice_not_found';
             end if;
          else
            insert into balances.pays (land_id, amount, dt, charge_type_id)
              values (p_land_id, p_amount, p_date, p_charge_type_id);
          end if;
        else
           err_text='extData.errors.charge_type_not_found';
        end if;
     else
        err_text='extData.errors.land_not_found';
     end if;
  end if;
  if (p_budget is not null) then
     if ((p_month is not null)and(p_year is not null)) then
       select b_b.id from budget.budgets b_b
         where (b_b.comment=p_budget)and
           (to_date(p_month||'.'||p_year, 'MM.YYYY') between b_b.dt_from and b_b.dt_to)
         into p_budget_id;
       if (p_budget_id is not null) then
          select b_i.id
            from budget.budgets b_b
              inner join budget.items b_i on (b_i.budget_id=b_b.id)
              inner join budget.item_names b_in on (b_in.id=b_i.item_name_id)and(b_in.name=p_budget_item)
          where (b_b.id=p_budget_id)
            into p_budget_item_id;
          if (p_budget_item_id is not null) then
            insert into budget.spendings(dt, item_id, amount)values(p_date, p_budget_item_id, p_amount);
          else
             err_text='extData.errors.budget_item_not_found';
          end if;
       else
         err_text='extData.errors.budget_not_found';
       end if;
     else
       err_text='extData.errors.budget_month_year';
     end if; 
  end if;
  if (err_text != '') then
    if (p_unknown_id != -1) then
      update ext_data.unknown set error=err_text where id=p_unknown_id;
    else 
      insert into ext_data.unknown (dt, amount, month, year, land, charge_code, budget, budget_item, error)
        values(p_date, p_amount, p_month, p_year, p_land, p_charge_code, p_budget, p_budget_item, err_text);
    end if;
  end if;
  if (p_unknown_id != -1)and(err_text = '') then
    delete from ext_data.unknown where id=p_unknown_id;
  end if;
end;$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100;
ALTER FUNCTION ext_data.add(integer, date, numeric, integer, integer, character varying, character varying, character varying, character varying)
  OWNER TO postgres;






select charges.charge_electricity (
                22,
                8,
                2021,
                0.00,
                0.00,
                0.00,
                0.00,
                0.00,
                0.00,
                0.00,
                0.00,
                'aaaa')

select ext_data.add(-1, to_date('23.09.2021', 'DD.MM.YYYY'), 1000, 9, 2021, '34', 'Электричество', null, null);


CREATE OR REPLACE FUNCTION balances.money_move(IN p_user_id integer, in date_from date, in date_to date)
  RETURNS TABLE(
    dt date,
    doc_id integer,
    land_id integer,
    land_num character varying,
    charge_type_id integer,
    charge_name character varying,
    amount_in numeric(20, 2),
    amount_out numeric(20, 2)
 ) AS
$BODY$
begin
  return query
    select 
      date_from,
      0::integer,
      0::integer,
     ''::varchar,
      0::integer,
     ''::varchar,
      0::numeric(20, 2),
      sum(t.amount)
    from (
      select 1, sum(bl.amount) amount
        from 
          lands.user_lands ul
            inner join balances.lands bl on(bl.land_id=ul.land_id)
          where (ul.user_id=2)
      union
      select 2, sum(0-i.amount) amount
        from 
          lands.user_lands ul
            inner join balances.invoices i on(i.land_id=ul.land_id)
              and(i.dt>=date_from)
           where (ul.user_id=p_user_id)
      union 
      select 3, sum(pays.amount) amount
        from 
          lands.user_lands ul
            inner join balances.pays pays on(i.land_id=ul.land_id)
             and(pays.dt>=date_from) 
          where (ul.user_id=p_user_id)   
   )t
   union
    select 
      t.dt,
      t.id,
      t.land_id,
      t.land_num,
      t.charge_type_id,
      t.charge_name,
      t.amount_in,
      t.amount_out
    from (
      select 
        i.dt,
        i.id,
        i.land_id,
        l.num as land_num,
        i.charge_type_id,
        c_t.name as charge_name,
        i.amount as amount_in,
        0::numeric(20, 2) as amount_out
        from 
          lands.user_lands ul
            inner join balances.invoices i on(i.land_id=ul.land_id)
              and(i.dt between date_from and date_to)
            left join lands.lands l on(l.id=ul.land_id)
            left join charges.types c_t on(c_t.id=i.charge_type_id)
           where (ul.user_id=p_user_id)
      union 
      select
        pays.dt,
        pays.id,
        pays.land_id,
        l.num as land_num,
        pays.charge_type_id,
        c_t.name as charge_name,
        0::numeric(20, 2) as amount_in,
        pays.amount as amount_out
        from 
          lands.user_lands ul
            inner join balances.pays pays on(i.land_id=ul.land_id)
             and(pays.dt between date_from and date_to)
            left join lands.lands l on(l.id=ul.land_id)
            left join charges.types c_t on(c_t.id=pays.charge_type_id)
          where (ul.user_id=p_user_id)   
   )t;

end;$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100
  ROWS 1000;
ALTER FUNCTION balances.money_move(integer, date, date)
  OWNER TO postgres;
