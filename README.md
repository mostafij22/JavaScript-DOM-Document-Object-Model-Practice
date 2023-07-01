
JavaScript - Document Object Model (DOM)
=============================================

DOM = Document Object Model
virtual DOM = virtual DOM hosse main DOM er upore akta alada sortcut layer, React ae sorrt cut layer 
              kaj korte bole, main layer react nijei manipulate kore dei user k.  

Document= Amra akta webpage e jakisu dekhi ta sobkisui DOM. document bolte amra MS word ja likhi take bujhi
          akta .text file e ja likhi take bujhi, Image=> .jpg, .png aguluo document, .pdf excel.xlsx 
          document. amra .dot(.) diye file document er extension likhe save kori 
          jokhon amra kono file k .html diye save korbo , atao akta document . tahole .html file er modhe
          ja kisu amra likhi sobi document.

Object= javaScript dot(.) document kisu chine na , sudu Object k chine, so .html file k Object akare 
        representation korar dorkar hoi, javaScript k bujar jonno , a e bujhiye daya tai hosse DOM.

DOM hosse amader je HTML page ta asse sei page er akta Object represent kore, javaScrpt er kase, jate 
javaScript diye document ta k change kora jai , manipulate kora jai

Model= amra je HTML code likhi , tar first e thake , <html>tag, tar modhe <head>tag thake tar modhe 
       <body> tag thake tar modhe <section> tag thake tar mode <div> tag theke avabe..........</html> close hoy. 
       Tahole ata akta hierarchical tree structure  maintain korse , mane aktar por akta .
       a khetre at first jekono akta Object toiri kore tar akta Parent thakte hobe, to sei Parent k brower er khetre bola hoy,==== window ===== a e window hosse brower er parent ba starting point. tar modhe
       actually ==document== thake, tarpor HTML thake 
       1.first layer = Window
       2.secound layer= document, webpage inspect kore ja dekhi ta hosse document
       3. third layer = HTML
       Window = hosse global akta object. as like container, sob kisu window object er modhe thake

    Tahole , window por document tar por html tag aker por ak nested akare thake, ja akta 
    tree structue model er moto dekte, a e model thekei Model kotha ta assese. 
    Model hosse amader je html document ase , tar akta Object representation tree Model. a e jish tai bujhano hoi DOM word diye.

  
     

   //webpage first render/display hoi, 
   //javaScript diye HTML k  manipulate/poriborton kori 
   //JavaScript active hoi brower e asar por/html browser e render/display hoyer por







//=================Sum of Two Number========================

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavScript DOM</title>
    
</head>

<body>
      
    <h1>Sum of Two Number</h1>
     <input id="num1"><br><br>   
     <input id="num2"><br><br>
     <button onclick="AddTwoNumber()">Add</button>   

     <script>
        function AddTwoNumber(e){
        
           let num1 = document.getElementById('num1').value;
           let num2 = document.getElementById('num2').value;
           let result=parseFloat(num1) + parseFloat(num2);

           alert(result)

           e.prventDefault();
        }
     </script>

</body>

</html>



   



   
 


