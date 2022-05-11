select "a"."line1",
      "a"."district",
      "c"."name",
      "countries"."name" as "country"
  from "addresses" as "a"
  join "cities" as "c" using ("cityId")
  join "countries" using ("countryId");
