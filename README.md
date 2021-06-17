**Ejercicio de pŕactica footer belcorp**

Para este ejercicio se espera que se pueda renderizar el footer de belcorp y que quede de la siguiente manera:

![](https://github.com/eduardoperez2151/RxJs_Practicas/blob/Ejercicio7/Darkvader/belcorpfooter.png)

Para realizar el ejercicio haremos lo siguiente:

1. Clonamos la rama
2. Ejecutaremos **yarn install** en la terminal ubicados en el root del proyecto clonado.
3. Después de lo anterior, abriremos dos terminales que apunten al root del proyecto.
4. En una de las dos ejecutaremos lo siguiente: **yarn run json-server**
5. En la otra consola ejecutaremos el proyecto con el comando **ng serve**

Para obtener los datos del backend, debemos dirigirnos a la url [http://localhost:3004/footer](http://localhost:3004/footer)

Este nos dará los principales datos del footer. Para obtener los demás debemos realizar una segunda petición o múltiples peticiones peticiones http dentro de la anterior hecha, ya que los datos que nos llegaran del footer vendrán incompletos, y debemos realizar peticiones para obtener los demas datos: Ejemplo

Si deseo obtener la imagen del Facebook:

![](https://img.icons8.com/small/452/facebook.png)

Debo primero obtener los datos del footer a través de la siguiente Url:

[http://localhost:3004/footer](http://localhost:3004/footer)

La cual me arrojará el siguiente resultado:

{

&quot;id&quot;: 1,

&quot;name&quot;: &quot;Componente de navegación del pie&quot;,

&quot;socialNetworksTitle&quot;: &quot;Mantente conectado&quot;,

&quot;CMSFooterImageTitleComponents&quot;: &quot;PaymentFooterImageTitleComponent DeliveryFooterImageTitleComponent QualityFooterImageTitleComponent&quot;,

&quot;LegalLinks&quot;:&quot;TermsOfUseLink PrivacyPoliciesLink TermsAndConditionsLink&quot;,

&quot;HelpLinks&quot;:&quot;FrequentQuestionsLink ReturnExchangesLink SeeCatalogLink ComplaintsBookLink&quot;,

&quot;socialImageLinks&quot;: &quot;FacebookLogoLinkComponent TwitterLogoLinkComponent InstagramLogoLinkComponent YoutubeLogoLinkComponent&quot;,

&quot;OurBrandsLinks&quot;: &quot;EsikaLink LBelLink CyzoneLink&quot;,

&quot;paymentMethodsImage&quot;: &quot;https://cdn1-prd.beautymovers.com/images/Footer/footer\_mp\_pe2.png&quot;,

&quot;paymentMethodsTitle&quot;: &quot;Operamos con:&quot;,

&quot;notice&quot;: &quot;2017 Belcorp&quot;,

&quot;ContactLinks&quot;: &quot;WantSellLink WriteUsLink&quot;

}

Para poder obtener el logo de facebook, debo hacer una segunda petición con el id FacebookLogoLinkComponent de la siguiente manera:

[http://localhost:3004/](http://localhost:3004/footer)socialImageLinks/FacebookLogoLinkComponent

Lo cual te devolverá lo siguiente:

{

&quot;id&quot;: &quot;FacebookLogoLinkComponent&quot;,

&quot;url&quot;: &quot;https://www.facebook.com/esika.belcorp&quot;,

&quot;imageComponentHover&quot;: {

&quot;media&quot;:{

&quot;mime&quot;:&quot;image/svg+xml&quot;,

&quot;url&quot;:&quot;assets/imgs/logo-facebook-hover.svg&quot;

}

},

&quot;imageComponent&quot;: {

&quot;media&quot; : {

&quot;mime&quot;:&quot;image/svg+xml&quot;,

&quot;url&quot;:&quot;assets/imgs/logo-facebook.svg&quot;

}

}

},

Así se hará igual para los demás datos.

Nota: el conducto para hacer los llamados al http es primero llamar al footer, y a partir de el realizar los demás llamados. No es necesario que el footer quede exactamente igual en estilos al mostrado en la imagen.
