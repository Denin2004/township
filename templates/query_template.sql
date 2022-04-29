select b_i.land_id, b_i.amount, b_i.month, b_i.year, l_l.square
  from balances.invoices b_i
  inner join lands.lands l_l on (l_l.id=b_i.land_id)
  where (b_i.month=11)and(b_i.charge_type_id=3)
  order by 1