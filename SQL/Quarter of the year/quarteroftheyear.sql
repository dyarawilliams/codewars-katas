-- Solution 1

-- SELECT month, 
-- case
--   when month <= 3 then 1
--   when month <= 6 then 2
--   when month <= 9 then 3
--   else 4 end as res 
-- FROM quarterof;

-- Solution 2
SELECT month, ((month-1)/3)+1 as res FROM quarterof;