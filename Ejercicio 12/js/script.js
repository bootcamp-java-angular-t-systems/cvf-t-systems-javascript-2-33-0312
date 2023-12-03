// PARTE 1: Expresión regular para fecha en formato "XX/XX/XXXX"
const fechaRegex = /\b\d{2}\/\d{2}\/\d{4}\b/;
const fechaPrueba = "Nací el 05/04/1982 en Donostia.";
console.log("Parte 1: " + fechaRegex.test(fechaPrueba));

// PARTE 2: Expresión regular para correo
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
const emailPrueba = "miCorreo@example.com";
console.log("Parte 2: " + emailRegex.test(emailPrueba));

// PARTE 3: Reemplazo de caracteres utilizando expresiones regulares
function escapeHTML(text) {
    const replacements = [
        ["&", "&amp;"],
        ['"', "&quot;"],
        ["<", "&lt;"],
        [">", "&gt;"],
    ];

    replacements.forEach((replace) => {
        const regex = new RegExp(replace[0], "g");
        text = text.replace(regex, replace[1]);
    });
    
    return text;
}

const textoHTML =
"<p>A continuacion hay caracteres a escapar &lt;p&gt; patata &amp; ejemplo &quot;bootcamp&quot;.&lt;/p&gt;";
const textoEscapado = escapeHTML(textoHTML);
console.log("Parte 3, texto sin escapar: " + textoHTML);
console.log("Parte 3, texto escapado: " + textoEscapado);


// PARTE 4: Mostrar nombre y apellido en orden inverso y separado por una coma
const nombreApellido = "John Smith";
const regexInvertirNombreApellido = /(\w+)\s(\w+)/;
const nombreInvertido = nombreApellido.replace(regexInvertirNombreApellido, "$2, $1");

console.log("Parte 4, texto sin invertir: " + nombreApellido);
console.log("Parte 4, texto invertido: " + nombreInvertido);


// PARTE 4: Eliminar etiquetas peligrosas
const cadenaHTML = "<p>Este es un <script>alert('peligroso')</script> ejemplo.</p>";
const regexEliminarEtiquetasPeligrosas = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
const htmlSinEtiquetasPeligrosas = cadenaHTML.replace(regexEliminarEtiquetasPeligrosas, "");

console.log("Parte 5, texto con etiquetas: " + cadenaHTML);
console.log("Parte 5, texto sin etiquetas: " + htmlSinEtiquetasPeligrosas);