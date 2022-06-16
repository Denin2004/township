ALTER TABLE balances.payment_orders ADD FOREIGN KEY (land_id) REFERENCES lands.lands (id);
ALTER TABLE balances.payment_orders ADD FOREIGN KEY (charge_type_id) REFERENCES charges.types (id);
ALTER TABLE balances.payment_orders ADD FOREIGN KEY (invoice_id) REFERENCES balances.invoices (id);

[
{"id":0,"line":189,"error":"extData.errors._invalid_period","data":{"dt":"18.05.2022","amount":5370,"month":null,"year":null,"land":null,"charge_code":"192","budget_item":"ц"}},
{"id":1,"line":212,"error":"extData.errors._invalid_period","data":{"dt":"20.05.2022","amount":3580,"month":null,"year":null,"land":null,"charge_code":"022","budget_item":"ц"}}
]

select b_i.land_id, b_i.amount, b_i.month, b_i.year, l_l.square
  from balances.invoices b_i
  inner join lands.lands l_l on (l_l.id=b_i.land_id)
  where (b_i.month=11)and(b_i.charge_type_id=3)
  order by 1