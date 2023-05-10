const say = ["Pasted.cc > all","no u are a tranny fat girl","xylazine is usually mixed with opioids and since xylazine has the same affects as a opiate (fentanyl, heroin) it would be a normal response to give someone narcan as the overdoses look very similar","maybe the real hack was the friends we made along the way","In mirage people shoot, In mirage people die. In mirage resolver break in mirage people hate"]



function killsay( ) {
    var local_index = g_entity.get_local_player( )
    var attacker = g_event.get_int( "attacker" )
    var attacker_to_player = g_entity.get_player_for_user_id( attacker )
    if ( attacker_to_player == local_index ) {
    g_cvar.execute_client_cmd("say " + say[Math.floor(Math.random() * say.length)])
    }
  }
