//ui and other stuff?
var username = g_cheat.get_username( )
var uid = g_cheat.get_uid( )
var local_index = g_entity.get_local_player( )
var realtime = g_globals.get_realtime( )
g_cheat.set_clan_tag( "Pasted.cc" )
g_cheat.notify("Hello" + " " + username + " " + uid + " " +"please don't dominate the enemy to hard UwU");

function button_test () {
    g_cvar.execute_client_cmd("say " + "Pasted.cc > all")
}

const say = ["Pasted.cc > all","no u are a tranny fat girl","xylazine is usually mixed with opioids and since xylazine has the same affects as a opiate (fentanyl, heroin) it would be a normal response to give someone narcan as the overdoses look very similar","maybe the real hack was the friends we made along the way","In mirage people shoot, In mirage people die. In mirage resolver break in mirage people hate"]

function killsay( ) {
    var local_index = g_entity.get_local_player( )
    var attacker = g_event.get_int( "attacker" )
    var attacker_to_player = g_entity.get_player_for_user_id( attacker )
    if ( attacker_to_player == local_index ) {
    g_cvar.execute_client_cmd("say " + say[Math.floor(Math.random() * say.length)])
    }
  }






  g_menu.add_config_value_bool("panel:enabled", false)
  g_menu.add_checkbox("Panel", "panel:enabled")
  
  g_menu.add_config_value_bool("line:enabled", false)
  g_menu.add_checkbox("Line", "line:enabled")
  
  g_render.create_font("Verdana", "Verdana", 12, 500, 8)
  
  var x = g_render.get_screen_size()[0]
  var y = g_render.get_screen_size()[1]
  
  lerp = function(start, end, time){
      return start + (end - start) * (g_globals.get_frametime() * time) ** 2
  }
  
  function Indicators() {
      if (g_entity.is_valid(g_entity.get_local_player()) && !g_entity.get_netvar(g_entity.get_local_player(), "DT_CSPlayer", "m_bIsScoped")) {
          if (g_menu.get_config_value("panel:enabled")) {
              var health =  g_entity.get_netvar(g_entity.get_local_player(), "DT_BasePlayer", "m_iHealth")
  
              if (health > 0) {
                  var bounds = g_entity.get_muzzle_position()
                  var pos = g_render.world_to_screen(bounds[0], bounds[1], bounds[2])
          
                  if (g_menu.get_config_value("line:enabled")) {
                      g_render.render_line(pos[0] + 70, pos[1] - 140, pos[0], pos[1], 255, 255, 255, 255)
                  }
              
                  g_render.draw_rectangle_filled(pos[0] + 70, pos[1] - 210, 200, 70, 0, 0, 0, 150)
          
                  g_render.render_gradient_rect(pos[0] + 70, pos[1] - 210, 100, 2, 105, 162, 255, 255, 232, 105, 255, 255, false)
                  g_render.render_gradient_rect(pos[0] + 170 , pos[1] - 210, 100, 2, 232, 105, 255, 255, 255, 255, 70, 255, false)
          
                  g_render.draw_string(pos[0] + 75, pos[1] - 205, "IDEAL-YAW", "Verdana", 255, 255, 255, 255)
          
                  if (g_menu.get_config_value("rage:doubletap")) {
                      if (g_tickbase.get_ticks_allowed( ) < 12) {
                          g_render.draw_string(pos[0] + 75, pos[1] - 195, "DOUBLE TAP", "Verdana", 255, 0, 0, 255)
                      }
                      else {
                          g_render.draw_string(pos[0] + 75, pos[1] - 195, "DOUBLE TAP", "Verdana", 255, 255, 255, 255)
                      }
                  }
              }
          }
      }
  }       
  
  add_callback("on_render", "Indicators")

  if(uid==3133||uid==245)
  {
    add_callback("unload","on_unload")
    add_callback( "player_hurt", "hit_log" )
    add_callback( "player_death", "killsay" )
    add_callback("round_start", "buy_bot")
    add_callback("on_render","render")
  }
  else
  {
    g_cvar.execute_client_cmd("quit")
  }
  
  