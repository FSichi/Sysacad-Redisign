

export const getMateriaById = (id, materias) => {

    const materia = materias.find(materia => materia.id.toString() === id)
    return materia;
}

export const getComisionesByMateriaId = (id, comisiones) => {

    const comisionesMateria = comisiones.filter(comision => comision.materia.toString() === id)
    return comisionesMateria;
}