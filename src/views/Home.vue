<template>
    <div class="content-section">
        <div class="row">
            <div class="col-9">
                <b-carousel
                    controls
                    indicators
                    fade
                    :interval="5000">
                    <b-carousel-slide v-for="img in 10" :img-src="getImage(img)" v-if="getImage(img) !== null"></b-carousel-slide>
                </b-carousel>
            </div>
        </div>
        <div class="card my-5">
            <div class="card-body">
                <h4 class="text-center">Razones para aprender a bailar</h4>
                <div class="lead font-italic">
                    <div class="row justify-content-start mx-3">Tengo estrés</div>
                    <div class="row justify-content-end mx-3">No sé bailar nada</div>
                    <div class="row justify-content-between mx-3">
                        <div class="col">Lo tomo como un ejercicio</div>
                        <div class="col">Conozco gente nueva</div>
                    </div>
                    <div class="row justify-content-center mx-3">Cumplo una de mis metas del año</div>
                    <div class="row justify-content-end mx-3">Me lo voy a regalar</div>
                    <div class="row justify-content-start mx-3">Acabo de cobrar</div>
                    <div class="row justify-content-center mx-3">Es una vez a la semana y en 1 mes rompo la pista</div>
                </div>
            </div>
        </div>
        <h4 class="text-center">Preguntas frecuentes</h4>
        <div class="row mb-5">
            <div class="col text-justify">
                <pre class="pre">
                    <b>¿Qué pasa si me quiero inscribir, pero no tengo pareja?</b>
                    No necesitas pareja. La mayoría de los nuevos estudiantes se inscriben solos, lo cual provoca que conozcas gente nueva.

                    <b>¿En qué tiempo se aprende?</b>
                    Aunque estás bailando desde el primer mes, el dominio se adquiere de 3 a 4 meses.

                    <b>¿Cuántas veces a la semana?</b>
                    Cada grupo tiene su horario específico.

                    <b>¿Puedo llevar invitados (familiar o amigos)?</b>
                    Todo el mundo es bienvenido al estudio, pero solo los estudiantes activos pueden tomar la clase.

                    <b>¿Es posible aprender aunque yo no sepa bailar nada?</b>
                    Nuestra especialidad es el doblepieizquierdismo y el trauma de que no te brinquen de chiquito.
                </pre>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <h2 class="text-center">Entonces, ¿Qué esperas para tirar los mil pasos? </h2>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            getImage(img) {
                try {
                    return require('../assets/images/carousel/'+ img +'.jpg');
                }
                catch (e) {
                    return null;
                }
            }
        }
    }
</script>
