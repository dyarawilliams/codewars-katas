SELECT t1.*, t2.name as company_name
FROM products as t1
LEFT JOIN companies as t2
ON t1.company_id = t2.id;