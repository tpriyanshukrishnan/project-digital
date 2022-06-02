import { 
    getPlayers,
    addNewPlayer,
    getPlayersWithID,
    UpdatePlayer,
    deletePlayer } from '../controllers/playerControllers';

const routes = (app) => {
    app.route('/players')
        .get(getPlayers)
        .post(addNewPlayer);
    app.route('/player/:PlayerID')
        .get(getPlayersWithID)
        .put(UpdatePlayer)
        .delete(deletePlayer)
}

export default routes;
