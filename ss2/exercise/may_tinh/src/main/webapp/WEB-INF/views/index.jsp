<%--
  Created by IntelliJ IDEA.
  User: Quoc Trung
  Date: 6/14/2022
  Time: 4:25 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>$Title$</title>
  </head>
  <body>
  <h2>Calculator</h2>
  <form action="/calculator" method="post">
    <div style="margin-bottom: 20px ">
    <input type="number" name="num1" placeholder="number 1">
    <label>
      <input type="number" name="num2" placeholder="number 2">
    </label>
    </div>
    <br>
    <button value="+" name="calculator" type="submit"> Addition(+)</button>
    <button value="-" name="calculator" type="submit"> Subtraction(-)</button>
    <button value="*" name="calculator" type="submit"> Multiplication(x)</button>
    <button value="/" name="calculator" type="submit"> Division(/)</button>
  </form>
  <h5>kết quả ${result}</h5>
  </body>
</html>
