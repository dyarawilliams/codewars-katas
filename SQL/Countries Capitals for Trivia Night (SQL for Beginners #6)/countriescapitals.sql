SELECT capital
FROM countries
WHERE continent in ('Africa','Afrika')
AND country like 'E%'
ORDER BY capital asc
LIMIT 3;