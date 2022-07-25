import {
    BookmarkAltIcon, CalendarIcon, ChartBarIcon, CursorClickIcon, MenuIcon, PhoneIcon,
    PlayIcon, RefreshIcon, ShieldCheckIcon, SupportIcon, ViewGridIcon, XIcon,
} from '@heroicons/react/outline'

export const cursado = [
    {
        name: 'Estado Academico',
        description: 'Revisa el estado actual de tu ficha academica y el progreso que has logrado.',
        href: '/estadoacademico',
        icon: ChartBarIcon,
    },
    {
        name: 'Examenes',
        description: 'Visualiza los examenes que rendiste con su nota y estado.',
        href: '/examenes',
        icon: CursorClickIcon,
    },
    {
        name: 'Cursado / Notas de Parciales',
        description: "Obten un vistazo a las materias que actualmente cursas y sus notas.",
        href: '/cursado',
        icon: ViewGridIcon,
    }
]

export const submenuCursado = [
    { name: 'Materias del Plan', href: '/materiasplan', icon: PlayIcon },
]

export const inscripciones = [
    {
        name: 'Inscripcion a Examen',
        description: 'Obten una lista de las materias a las que puedes inscribirte para rendir examenes. ',
        href: '/inscripciones/examen/list',
        icon: SupportIcon,
    },
    {
        name: 'Inscripcion a Cursado',
        description: 'Obten una lista de las materias a las que puedes inscribirte para cursar, segun correlatividad y plan de estudios.',
        href: '/inscripciones/cursado/list',
        icon: BookmarkAltIcon,
    },
]

export const submenuInscripcion = [
    { name: 'Correlatividad para Cursar', href: '/correlatividad/cursado', icon: PlayIcon },
    { name: 'Correlatividad para Rendir', href: '/correlatividad/rendir', icon: PlayIcon },
]

export const perfil = [
    {
        name: 'Perfil Academico',
        description: 'Revisa tu informacion de perfil academico y personal.',
        href: '/perfil',
        icon: SupportIcon,
    },
]