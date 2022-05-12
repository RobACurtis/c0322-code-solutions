select sum("amount") as "totalPaid",
       "c"."firstName"
  from "customers" as "c"
  join  "payments" using ("customerId")
  group by "customerId";
