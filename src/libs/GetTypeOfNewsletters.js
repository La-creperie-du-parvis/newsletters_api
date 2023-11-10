/* 
Récuperer dans l'url quel est le type de la requête : Ajout d'un nouveau produit, création d'une réservation, Plat du moment, .. 
*/

export const getTypeOfNewsletters = async (req, res) => {
        res.status(204).send()
        return req.params
}