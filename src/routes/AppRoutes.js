import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Navbar from '../components/Navbar/Navbar'
import { Avisos } from '../pages/Avisos/Avisos'
import { Cursado } from '../pages/Cursado/Cursado'
import { EstadoAcademico } from '../pages/Cursado/EstadoAcademico'
import { Examenes } from '../pages/Cursado/Examenes'
import { MateriasPlan } from '../pages/Cursado/MateriasPlan'
import { Correlativa_Cursado } from '../pages/Inscripciones/Correlativa_Cursado'
import { Correlativa_Rendir } from '../pages/Inscripciones/Correlativa_Rendir'
import { Inscripcion_Cursado } from '../pages/Inscripciones/Inscripcion_Cursado'
import { Inscripcion_Examen } from '../pages/Inscripciones/Inscripcion_Examen'
import { ExamenScreen } from '../pages/Inscripciones/ExamenScreen'
import { Perfil } from '../pages/Perfil/Perfil'
import { Tramites } from '../pages/Tramites/Tramites'
import { Page404 } from '../pages/UI/404/Page404'
import { Home } from '../pages/UI/home/Home'
import { InscripcionScreen } from '../pages/Inscripciones/InscripcionScreen'

export const AppRoutes = () => {
    return (
        <Router>

            <Navbar />

            <Switch>

                <Route path="/home" component={Home}></Route>
                <Route path="/pagenotfound" component={Page404}></Route>

                {/* CURSADO */}

                <Route path="/estadoacademico" component={EstadoAcademico}></Route>
                <Route path="/examenes" component={Examenes}></Route>
                <Route path="/cursado" component={Cursado}></Route>
                <Route path="/materiasplan" component={MateriasPlan}></Route>

                {/* INSCRIPCIONES */}

                <Route path="/inscripciones/examen/list" component={Inscripcion_Examen}></Route>
                <Route path="/inscripciones/examen/:materiaId" component={ExamenScreen}></Route>
                <Route path="/inscripciones/cursado/list" component={Inscripcion_Cursado}></Route>
                <Route path="/inscripciones/cursado/:materiaId" component={InscripcionScreen}></Route>
                <Route path="/correlatividad/cursado" component={Correlativa_Cursado}></Route>
                <Route path="/correlatividad/rendir" component={Correlativa_Rendir}></Route>

                {/* OTRAS RUTAS */}

                <Route path="/avisos" component={Avisos}></Route>
                <Route path="/tramites" component={Tramites}></Route>

                {/* PERFIL */}

                <Route path="/perfil" component={Perfil}></Route>

                <Redirect to={'/home'} />

            </Switch>

        </Router>
    )
}