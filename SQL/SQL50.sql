#584 
SELECT name FROM Customer WHERE referee_id!= 2 OR referee_id IS NULL;

#595 BIG COUNTRIES
SELECT name, population, area FROM World WHERE area >= 3000000 OR population >= 25000000 ;

#1068 PRODUCT SALES ANALYSIS
SELECT product_name, year, price FROM Product NATURAL JOIN Sales;

#1148 Article view I 
SELECT DISTINCT(author_id) as id FROM Views WHERE author_id = viewer_id ORDER BY id ASC;

# 1378 REPLACE EMPLOYEE ID WITH THE UNIQUE IDENTIFIER
SELECT EmployeeUNI.unique_id as unique_id , Employees.name as name FROM Employees LEFT JOIN EmployeeUNI ON EmployeeUNI.id=Employees.id;

#1607 CUSTOMER WHO VISITED BUT DID NOT MAKE ANY TRANSACTIONS
SELECT customer_id, COUNT(customer_id) as count_no_trans  FROM visits v LEFT JOIN Transactions t ON v.visit_id=t.visit_id WHERE transaction_id IS NULL GROUP BY customer_id ORDER BY COUNT(customer_id) DESC;

# 1757
SELECT product_id FROM Products WHERE low_fats='Y' AND recyclable='Y';