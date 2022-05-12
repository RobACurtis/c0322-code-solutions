
select count(*) as "movies",
      "genres"."name"
    from "actors"
    join "castMembers" using ("actorId")
    join "filmGenre" using ("filmId")
    join "genres" using ("genreId")
    where "actors"."firstName" = 'Lisa'
    and "actors"."lastName" = 'Monroe'
    group by "genres"."name";
