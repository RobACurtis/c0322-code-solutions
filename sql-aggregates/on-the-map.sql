select count(*) as "numberOfCities",
        "c"."name"
from "countries" as "c"
join "cities" using ("countryId")
group by "c"."name";
