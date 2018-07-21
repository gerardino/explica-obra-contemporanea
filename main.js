(function () {
    const c = [
        [
            'Una crítica a',
            'Una reflexión sobre',
            'Un acercamiento a',
            'Una asimilación de',
            'Una alegoría de',
            'Un redescubrimiento de'
        ],
        [
            'los lugares',
            'los espacios',
            'los vínculos',
            'los contrastes',
            'los lenguajes',
            'los valores'
        ],
        [
            'comunes',
            'fronterizos',
            'limitrofes',
            'encontrados',
            'deteriorados',
            'ultraperiféricos'
        ],
        [
            'del consumismo',
            'del costumbrismo',
            'de la experiencia',
            'de la cultura',
            'de la sociedad',
            'de la individuaildad'
        ],
        [
            'posmoderno/a',
            'colectivo/a',
            'deshumanizador(a)',
            'dominante',
            'establecido/a',
            'hipersensorial'
        ]
    ];

    function generar() {
        let r = '';

        c.forEach(f => {
            r = r + f[Math.round(Math.random() * (f.length - 1))] + ' ';
        });

        return r.trim() + '.';
    }

    document.getElementById('gen').addEventListener("click", () => {
        document.getElementById('obra').innerHTML = generar();
    });
})();