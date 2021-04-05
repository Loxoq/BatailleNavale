//on fait appelle aux modules de la bibliothèque de node.js pour créer un serveur et avoir une API pour communiquer 
var http = require('http');
var fs = require('fs');
var url = require('url');

var resultat = "vide";
var onglet = "rien";
var checks=0;
var tour = true;

// Chargement du fichier joueur.html affiché au client ou de la page regle lorsqu'on clique dans la barre de navigation
var server = http.createServer(function(req, res) {
    var page = url.parse(req.url).pathname; // on parse la requete pour obtenir le nom de la page demandée
    if (page == '/') {
        fs.readFile('./joueur.html', 'utf-8', function(error, content) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
        });
    }
    else if (page == '/onglet') {
        fs.readFile('./regles.html', 'utf-8', function(error, content) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
        });
    }
    
    console.log(page);
});

//on crée une variable players pour que le fichier json contienne bien 2 fois joueur lorsqu'on lance le serveur
var players={
    "player1": "joueur",
    "player2": "joueur"
}
//on crée une variable dataP qui écrit players en format json
var dataP=JSON.stringify(players, null, 2);
//on l'écrit dans le fichier players.json et dans la console
fs.writeFile('players.json', dataP, finished);
console.log(players);

function finished(err){
    console.log('all set');
}

//on crée une variable grilles_1 pour que le fichier json contienne bien que des 0 lorsqu'on lance le serveur
var grilles_1={
    "joueur": [ 
        
        { "ligne" : 
         
                [ 
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]}
                    
                ]
        },
        
        {"ligne" :
            
                [
                 
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]}
                       
                ]
        }
    ]
}
//on crée une variable dataG qui écrit grilles_1 en format json
var dataG=JSON.stringify(grilles_1, null);
//on l'écrit dans le fichier grilles_1.json 
fs.writeFile('grilles_1.json', dataG, finished);

//on crée une variable grilles_2 pour que le fichier json contienne bien que des 0 lorsqu'on lance le serveur
var grilles_2={
    "joueur": [ 
        
        { "ligne" : 
         
                [ 
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]}
                    
                ]
        },
        
        {"ligne" :
            
                [
                 
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]}
                       
                ]
        }
    ]
}
//on crée une variable dataG2 qui écrit grilles_2 en format json
var dataG2=JSON.stringify(grilles_2, null);
//on l'écrit dans le fichier grilles_2.json 
fs.writeFile('grilles_2.json', dataG2, finished);

//on crée la fonction enregistrement qui est appelée lorsque le joueur envoie un 'enregistrer' au serveur lorsqu'il place ses bateaux
function enregistrement(numJ, maLigne, numColonne){
    //on change le nombre dans la case correspondante de la variable
    grilles_1.joueur[numJ].ligne[maLigne-1].case[numColonne]=1;
    //on écrit la variable au format json
    var dataG=JSON.stringify(grilles_1);
    //on l'écrit dans le fichier grilles_1.json
    fs.writeFile('grilles_1.json', dataG, finished);
}

//on crée la fonction attaque qui est appelée lorsque le joueur envoie une 'attaque' au serveur lorsqu'il clique sur la grille adverse
function attaquer(numJ, maLigne, numColonne){
    //si c'est le joueur 1
    if (numJ==0){
        //on va chercher la case correspondant à celle qui a été cliquée pour faire les controles
        switch(grilles_1.joueur[numJ+1].ligne[maLigne-1].case[numColonne]){
            case 0:
                //si c'est 0, pas de bateau donc on change en 3 dans la 2ème variable
                grilles_2.joueur[numJ+1].ligne[maLigne-1].case[numColonne]=3;
                resultat="perdu"
                break;
            case 1:
                //si c'est 1, il y a un bateau donc on change en 2 dans la 2ème variable
                grilles_2.joueur[numJ+1].ligne[maLigne-1].case[numColonne]=2;
                resultat="reussi"
                break;
            default:
                console.log("pas trouvé");
        }
    }
    //si c'est le joueur 2 on effectue les mêmes actions mais dans les cases opposées des grilles
    else if (numJ==1){
        switch(grilles_1.joueur[numJ-1].ligne[maLigne-1].case[numColonne]){
            case 0:
                grilles_2.joueur[numJ-1].ligne[maLigne-1].case[numColonne]=3;
                resultat="perdu"
                break;
            case 1:
                grilles_2.joueur[numJ-1].ligne[maLigne-1].case[numColonne]=2;
                resultat="reussi"
                break;
            default:
                console.log("pas trouvé");
        }
    }
    //on écrit la variable au format json et on l'écrit dans le fichier json
    var dataG2=JSON.stringify(grilles_2);
    fs.writeFile('grilles_2.json', dataG2, finished);
}

// Chargement de socket.io
var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket, pseudo) {
    
    socket.on('petit_nouveau', function(pseudo) {
        // Dès qu'on nous donne un pseudo, on le stocke en variable de session
        socket.pseudo = pseudo;
        //si player1 et player2 ne sont pas égaux à joueur, on ne peut pas entrer dans la partie
        if((players["player1"]!="joueur")&&(players["player2"]!="joueur")){
            socket.emit('message', 'Il y a déja deux joueurs !');
        }
        //si joueur1 et joueur2 sont égaux à joueur, alors le joueur1 devient égal au pseudo
        else if ((players["player1"]=="joueur")&&(players["player2"]=="joueur")){
            players["player1"]= pseudo;
            // Quand un client se connecte, on lui envoie un message et son pseudo pour pouvoir l'afficher
            socket.emit('message', 'Vous êtes bien connecté !');
            socket.emit('vous', pseudo)
            // On signale aux autres clients qu'il y a un nouveau venu
            socket.broadcast.emit('message', pseudo + ' vient de se connecter !');
        }
        //si le joueur1 n'est pas égal à joueur, alors c'est le joueur2 qui devient le pseudo
        else if (players["player1"]!="joueur"){
            players["player2"]= pseudo;
            // Quand un client se connecte, on lui envoie un message et son pseudo pour pouvoir l'afficher
            socket.emit('message', 'Vous êtes bien connecté !');
            socket.emit('vous', pseudo);
            // On signale aux autres clients qu'il y a un nouveau venu
            socket.broadcast.emit('message', pseudo + ' vient de se connecter !');
            //on envoit à chaque page le pseudo de l'autre pour l'afficher
            socket.emit('autre', players["player1"]);
            socket.broadcast.emit('autre', pseudo);
        }
        //on crée une variable data2 qui écrit players en format json et on l'écrit dans le fichier players.json
        var data2=JSON.stringify(players, null, 2);
        fs.writeFile('players.json', data2, finished);
        //On écrit dans la console les noms des joueurs
        console.log(players);
        
        function finished(err){
            console.log('all set');
        }
    });
        
    // Quand on reçoit un "enregistrer"
    socket.on('enregistrer', function (maCase) {
        // Dès qu'on nous donne une case, on la stocke en variable de session
        socket.maCase=maCase;
        //on crée la variable maLigne qui stocke tous les caractères à partir du rang 1
        maLigne=maCase.substring(1);
        //on crée la variable maColonne qui stocke le caractère de rang 0
        maColonne=maCase.charAt(0);
        //on note dans la console où le joueur a cliqué
        console.log(socket.pseudo + ' a cliqué en ' + maCase);
        //on crée un tableau qui contient les noms des colonnes pour pouvoir ensuite enregistrer le changement de numéro dans le json au bon endroit avec la fonction enregistrer
        var lettre = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
        var numColonne=0;
        // la variable numColonne prend le rang de la case qui va changer dans le json
        for (l=0; l<lettre.length; l++){
            if (maColonne==lettre[l]){
                numColonne=l;
            }
        }
        if (socket.pseudo==players["player1"]){
            numJ=0;
        }
        else if(socket.pseudo==players["player2"]){
            numJ=1;
        }
        enregistrement(numJ, maLigne, numColonne);
    });
    
    socket.on('reboot', function(){
        console.log('recommencer');
        var grilles_1={
    "joueur": [ 
        
        { "ligne" : 
         
                [ 
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]}
                    
                ]
        },
        
        {"ligne" :
            
                [
                 
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]},
                    {"case":[0,0,0,0,0,0,0,0,0,0]}
                       
                ]
        }
    ]
}
        var dataP=JSON.stringify(players, null, 2);
        fs.writeFile('grilles_1.json', dataG, finished);
    });
    
    //quand on recoit un "check"
    socket.on('check', function(pseudo){
        checks++;
        //console.log(checks + " " + pseudo);
        if (checks==1){
            socket.broadcast.emit('message', pseudo + " a placé tous ses bateaux et est prêt à commencer le jeu.");
        }
        else if(checks==2){
            if (pseudo==players["player1"]){
               socket.emit('message', "A vous de commencer à jouer !");
            } 
            if (pseudo==players["player2"]){
               socket.broadcast.emit('message', "A vous de commencer à jouer !");
            } 
        }

    });
    
    //Quand qu'on reçoit une "attaque"
    socket.on('attaque', function (maCase, attention, reussi, perdu) {
        if(checks==2){
            if( ((socket.pseudo==players["player1"])&(tour==true)) |((socket.pseudo==players["player2"])&(tour==false)) ){
                // on récupère maCase, maLigne et maColonne de la même façon que pour 'enregistrer'
                socket.maCase=maCase;
                maLigne=maCase.substring(1);
                maColonne=maCase.charAt(0);
                // On récupère le pseudo de celui qui a cliqué dans les variables de session et on le note dans la console
                console.log(socket.pseudo + ' a attaqué en ' + maCase);
                //On informe l'autre joueur qu'il a cliqué -> à remplacer par touche et eau
                socket.broadcast.emit('attention', socket.pseudo + " vient d'attaquer en " + maCase + ' ! ');
                //on définit numColonne de la même facon que dans 'enregistrer'
                var lettre = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
                var numColonne=0;
                for (l=0; l<lettre.length; l++){
                    if (maColonne==lettre[l]){
                        numColonne=l;
                    }
                }
                if (socket.pseudo==players["player1"]){
                    numJ=0;
                    tour=false;
                }
                else if(socket.pseudo==players["player2"]){
                    numJ=1;
                    tour=true;
                }
                attaquer(numJ, maLigne, numColonne);
                //on envoie le résultat du controle au client et on l'écrit dans la console
                console.log(resultat);
                if (resultat == "reussi"){
                    socket.emit('reussi', 'Vous avez touché un bateau en ' + maCase + ".")
                    socket.broadcast.emit('touche', maCase)
                }
                else{
                    socket.emit('perdu', "Vous avez tapé dans l'eau en " + maCase + ".");
                    socket.broadcast.emit('eau', maCase)
                }
            }
            else{
                socket.emit('message',"Ce n'est pas à vous de jouer !");
            }
        }
    });
    
    socket.on('action', function(action){
        console.log(action);
        //onglet="deux";
        //console.log(onglet);
    })

});

//On indique sur quel serveur on va écouter et on affiche un message dans la console
server.listen(3000, function(){
  console.log('Ecoute sur le port 3000');
});