API Design & Implementation

1 - 
SELECT * FROM products LEFT JOIN providers ON products.provider_id = providers.id  WHERE providers.is_active = TRUE AND products.vertical_id = 1;

*see image 1.png for better understand if needed

if what is need is oly the data from thoses prodocts then query should look like this 

SELECT products.data FROM products LEFT JOIN providers ON products.provider_id = providers.id  WHERE providers.is_active = TRUE AND products.vertical_id = 1;; 


*see image 2.png for better understand if needed


2 - open Exercise/exercise_2.js to see function

3- see https://app.swaggerhub.com/apis/luisjoia/api.ComparaJa/1.0.0



Build Front-end for Results Page

1/2 - open file Exercise/index.html