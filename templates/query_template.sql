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
