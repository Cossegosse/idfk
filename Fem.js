//ui and other stuff?
g_render.create_font("idk1", "comic sans ms", 30, 600, 2 | 8)
g_render.create_font("idk2", "comic sans ms", 10, 500, 2 | 8)
var username = g_cheat.get_username( )
var uid = g_cheat.get_uid( )
var local_index = g_entity.get_local_player( )
var realtime = g_globals.get_realtime( )
g_cheat.set_clan_tag( "Pasted.cc" )
g_cheat.notify("Hello" + " " + username + " " + uid + " " +"please don't dominate the enemy to hard UwU");
g_menu.add_config_value_color( "Pasted.cc:ui:color", 255, 131, 131, 255)
g_menu.add_combo("<Pasted.cc>","Pasted.cc:ui:nav","Info","Rage","Anti Aim","Misc","Visuals")
g_globals.print_console("Pasted.cc", 255, 136, 136)
function rage_quit () {
    g_cvar.execute_client_cmd("quit");
  }

g_menu.add_button("Free money hack", "rage_quit")

function button_test () {
    g_cvar.execute_client_cmd("say " + "Pasted.cc > all")
    
}
g_menu.add_button("Aimbot", "button_test")

const say = ["Pasted.cc > all","no u are a tranny fat girl","xylazine is usually mixed with opioids and since xylazine has the same affects as a opiate (fentanyl, heroin) it would be a normal response to give someone narcan as the overdoses look very similar","maybe the real hack was the friends we made along the way","In mirage people shoot, In mirage people die. In mirage resolver break in mirage people hate"]

function killsay( ) {
    var local_index = g_entity.get_local_player( )
    var attacker = g_event.get_int( "attacker" )
    var attacker_to_player = g_entity.get_player_for_user_id( attacker )
    if ( attacker_to_player == local_index ) {
    g_cvar.execute_client_cmd("say " + say[Math.floor(Math.random() * say.length)])
    }
  }

if(username==cossegosse||username==1)
  {
    g_cvar.execute_client_cmd("say Pasted")
  }
  else
  {
    g_cvar.execute_client_cmd("quit")
  }
    