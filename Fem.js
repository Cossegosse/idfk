x = g_render.get_screen_size()[0] // width
y = g_render.get_screen_size()[1] // height
screenx =g_render.get_screen_size()[0]
screeny =g_render.get_screen_size()[1]
var uid = g_cheat.get_uid()
var username = g_cheat.get_username()
g_render.create_font("Skeet", "calibri", 30, 600, 2 | 8)
g_render.create_font("Arrows", "calibri", 40, 600, 2 | 8)
g_render.create_font("Pixel", "smallest_pixel-7", 10, 500, 2 | 8)
g_render.create_font("UI0", "verdana", 10, 500, 2 | 8)
g_render.create_font("UI1", "verdana", 12, 500, 2 | 8)
g_render.create_font("UI2", "verdana", 13, 500, 2 | 8)
g_render.create_font("UI3", "verdana", 15, 500, 2 | 8)
g_render.create_font("UI4", "verdana", 20, 500, 2 | 8)
var local_index = g_entity.get_local_player( )
g_cvar.execute_client_cmd("clear");
var i=0;
var doffset = 15;
old_value=0
var shco = g_menu.get_config_value("rage:scout_hitchance");
var r8hco = g_menu.get_config_value("rage:r8_hitchance");
var st = g_menu.get_config_value( "vanity:environment:noscope" )
leng = 0
kbindanim=0
dtanim=0
dtalpha=0
idealtalpha=0
idealtickanim=0
arrowclr1=[255,255,255]
arrowclr2=[255,255,255]
dtcolor=[0,0,0]
endcord = [0,0]
endcord1 = [0,0]
g_globals.print_console("[Fem.JS]", 255, 136, 136)
g_globals.print_console(" Welcome back "+username+" to Fem,js\n", 255, 255, 255)
function in_bounds(x,y,w,h){
  return g_input.get_key_down(1) && mouse_x >= x && mouse_x <= x + w && mouse_y >= y&& mouse_y <= y + h
}

lerp = function(start, end, time){
  return start + (end - start)  * (g_globals.get_frametime() * time ) **2
}
var animtime = g_globals.get_curtime()+4

var animalpha = 255
anim0 =0;
anim1 =0;
fade=0
function load_anim()
{
  g_render.draw_rectangle_filled(10, 8, g_render.get_text_width("Welcome Back To Fem.js "+username, "UI3")+10, 2, 255, 255, 255, animalpha)
  g_render.draw_rectangle_filled(10, 10, g_render.get_text_width("Welcome Back To Fem.js "+username, "UI3")+10, 24, 0, 0, 0, animalpha)
  g_render.draw_string(14, 15, "Welcome Back To Fem.js "+username, "UI3", 255, 255, 255, animalpha)
  if(g_globals.get_curtime()>=animtime)
  {
    animalpha=lerp(animalpha,0,30)
  }
}
//ui/rage 
g_menu.add_config_value_color( "Fem:ui:color", 255, 131, 131, 255)
g_menu.add_combo("<Fem>","Fem:ui:nav","Info","Rage","Anti Aim","Misc","Visuals")
function show_dev () {
  g_globals.print_console("[Fem.JS]", 255, 136, 136)
  g_globals.print_console(" is coded by Gh1ti#7766 on discrord or Gh1ti UID 2540 on the plague forum \n", 255, 255, 255)
}
g_menu.add_button("Show Script Developers", "show_dev")
function rage_quit () {
  g_cvar.execute_client_cmd("quit");
}
g_menu.add_button("Rage Quit", "rage_quit")
g_menu.add_colorpicker("Script accent", "Fem:ui:color")
g_menu.add_config_value_bool( "Fem:ssg", false ) 
g_menu.add_config_value_bool( "Fem:r8", false ) 
g_menu.add_config_value_bool( "Fem:auto", false )
g_menu.add_config_value_int("Fem:ssg:hc", 0)
g_menu.add_config_value_int("Fem:r8:hc", 0)
g_menu.add_multi_combobox("<Rage Selections>", [ [ "SSG 08", "Fem:ssg"], [ "Revolver", "Fem:r8"], [ "Autos", "Fem:auto"] ] )
g_menu.add_slider( "SSG in air HC", "Fem:ssg:hc", 0, 100 )
g_menu.add_slider( "R8 in air HC", "Fem:ssg:hc", 0, 100 )
g_menu.add_checkbox("Fake Flick","Fem:ui:aafakeflik",false)
//
g_menu.add_config_value_int("Fem:kbx",100)
g_menu.add_config_value_int("Fem:kby",100)
g_menu.add_config_value_int("Fem:pnlx",5)
g_menu.add_config_value_int("Fem:pnly",500)
g_menu.add_config_value_int("Fem:ui:nav",0)
g_menu.add_config_value_int("Fem:rageui:nav",0)
g_menu.add_config_value_int("Fem:ui:aafakeflik",false)
g_menu.add_config_value_int("Fem:ui:aafftime",1)
g_menu.add_config_value_int("Fem:ui:aapresets",0)
g_menu.add_config_value_int("Fem:aa:builder",0)
g_menu.add_config_value_bool("Fem:aa:legf",false)
g_menu.add_config_value_int("Fem:misc:buybotmain",0)
g_menu.add_config_value_int("Fem:misc:buybotsecond",0)
g_menu.add_config_value_bool("Fem:misc:buybot",false)
g_menu.add_config_value_bool("Fem:misc:clantag",false)
g_menu.add_config_value_int( "animated:scope:lengt", 100 ) 
g_menu.add_config_value_int( "animated:speed", 30 )
g_menu.add_config_value_int( "animated:scope:offset", 10 ) 
g_menu.add_config_value_int( "animated:scope:type", 0 )
g_menu.add_config_value_color( "animated:scope:color", 255, 255, 255, 255)
var kbx = g_menu.get_config_value("Fem:kbx")
var kby = g_menu.get_config_value("Fem:kby")
var pnlx = g_menu.get_config_value("Fem:pnlx")
var pnly = g_menu.get_config_value("Fem:pnly")
//visual
g_menu.add_config_value_bool("Fem:visuals:watermark",true)
g_menu.add_config_value_bool("Fem:visuals:keybinds",false)
g_menu.add_config_value_bool("Fem:visuals:indicators",false)
g_menu.add_config_value_bool("Fem:visuals:infotab",false)
g_menu.add_config_value_bool("Fem:visuals:infopanel",false)
g_menu.add_config_value_bool("Fem:visuals:viewmodelins",false)
g_menu.add_config_value_int("Fem:visual:infoflag",0)
g_menu.add_config_value_bool("Fem:visuals:skeetind",false)
g_menu.add_checkbox("Watermark","Fem:visuals:watermark",true)
g_menu.add_checkbox("Skeet indicators","Fem:visuals:skeetind",true)
g_menu.add_checkbox("Info Panel","Fem:visuals:infopanel",false)
g_menu.add_checkbox("Keybinds","Fem:visuals:keybinds",false)
g_menu.add_checkbox("Indicators","Fem:visuals:indicators",false)
g_menu.add_checkbox("Info Tab","Fem:visuals:infotab",false)
g_menu.add_combo("Info Flag","Fem:visual:infoflag","Romania", "Germany", "France", "Italy", "Rusia","Poland")
g_menu.add_checkbox("Viewmodel In Scope","Fem:visuals:viewmodelins",false)
g_menu.add_checkbox("Clantag","Fem:misc:clantag",false)
//misc
g_menu.add_config_value_int("Fem:visuals:aspect_ratio",0)
g_menu.add_config_value_bool("Fem:misc:killsay",false)
g_menu.add_slider("Aspect Ratio","Fem:visuals:aspect_ratio",0,200)
g_menu.add_checkbox("Killsay","Fem:misc:killsay",false)
g_menu.add_checkbox("Scaleform Hud","vanity:scaleform",false)
g_menu.add_colorpicker("Scope color", "animated:scope:color")
g_menu.add_combo("Scope type", "animated:scope:type","Default","Gradient", "Reverse Gradient");
g_menu.add_slider( "Speed", "animated:speed", 0, 100 )
g_menu.add_slider( "Lenght", "animated:scope:lengt", 0, 500 )
g_menu.add_slider( "Offset", "animated:scope:offset", 0, 100 )
g_menu.add_checkbox("Buybot","Fem:misc:buybot",false)
g_menu.add_combo("Buybot Main","Fem:misc:buybotmain","SSG 08","Scar-20/G3SG1","AWP")
g_menu.add_combo("Buybot Second","Fem:misc:buybotsecond","Five-Seven/Tec9/CZ","Dual Beretas","DEAGLE/R8","P250")
//aa yaw vals  
g_menu.add_config_value_int("Fem:stand:yaw", 0)
g_menu.add_config_value_int("Fem:walk:yaw", 0)
g_menu.add_config_value_int("Fem:crouch:yaw", 0)
g_menu.add_config_value_int("Fem:run:yaw", 0)
g_menu.add_config_value_int("Fem:airborne:yaw", 0)
//aa jitter vals
g_menu.add_config_value_int("Fem:stand:jitter", 0)
g_menu.add_config_value_int("Fem:walk:jitter", 0)
g_menu.add_config_value_int("Fem:crouch:jitter", 0)
g_menu.add_config_value_int("Fem:run:jitter", 0)
g_menu.add_config_value_int("Fem:airborne:jitter", 0)
//aa desync vals
g_menu.add_config_value_int("Fem:stand:desync", 0)
g_menu.add_config_value_int("Fem:walk:desync", 0)
g_menu.add_config_value_int("Fem:crouch:desync", 0)
g_menu.add_config_value_int("Fem:run:desync", 0)
g_menu.add_config_value_int("Fem:airborne:desync", 0)
//aa fake vals
g_menu.add_config_value_int("Fem:stand:fake", 0)
g_menu.add_config_value_int("Fem:walk:fake", 0)
g_menu.add_config_value_int("Fem:crouch:fake", 0)
g_menu.add_config_value_int("Fem:run:fake", 0)
g_menu.add_config_value_int("Fem:airborne:fake", 0)
//aa box
g_menu.add_slider("Fake Speed","Fem:ui:aafftime",1,10)
g_menu.add_combo("AA Presets","Fem:ui:aapresets","None","Tank AA","Low Delta","Bangladesh Jitter","AA Builder")
g_menu.add_combo("AA Builder","Fem:aa:builder","Standing","Walking","Crouched","Running","Airborne")
//aa yaw slider
g_menu.add_slider("[S]Yaw","Fem:stand:yaw",-180,180)
g_menu.add_slider("[W]Yaw","Fem:walk:yaw",-180,180)
g_menu.add_slider("[R]Yaw","Fem:run:yaw",-180,180)
g_menu.add_slider("[C]Yaw","Fem:crouch:yaw",-180,180)
g_menu.add_slider("[A]Yaw","Fem:airborne:yaw",-180,180)
//aa jitter slider
g_menu.add_slider("[S]Jitter","Fem:stand:jitter",-180,180)
g_menu.add_slider("[W]Jitter","Fem:walk:jitter",-180,180)
g_menu.add_slider("[R]Jitter","Fem:run:jitter",-180,180)
g_menu.add_slider("[C]Jitter","Fem:crouch:jitter",-180,180)
g_menu.add_slider("[A]Jitter","Fem:airborne:jitter",-180,180)
//aa desync sliders
g_menu.add_slider("[S]Desync","Fem:stand:desync",-50,50)
g_menu.add_slider("[W]Desync","Fem:walk:desync",-50,50)
g_menu.add_slider("[R]Desync","Fem:run:desync",-50,50)
g_menu.add_slider("[C]Desync","Fem:crouch:desync",-50,50)
g_menu.add_slider("[A]Desync","Fem:airborne:desync",-50,50)
//aa fake sliders
g_menu.add_slider("[S]Fake","Fem:stand:fake",0,60)
g_menu.add_slider("[W]Fake","Fem:walk:fake",0,60)
g_menu.add_slider("[R]Fake","Fem:run:fake",0,60)
g_menu.add_slider("[C]Fake","Fem:crouch:fake",0,60)
g_menu.add_slider("[A]Fake","Fem:airborne:fake",0,60)

//pula mea ma
g_menu.add_checkbox("Legs Fucker","Fem:aa:legf",false)


function ui()
{
  if(g_menu.get_config_value("Fem:ui:nav")==0)
  {
    g_menu.set_visibility("Script accent",true)
    g_menu.set_visibility("Show Script Developers",true)
    g_menu.set_visibility("Rage Quit",true)
  }
  else
  {
    g_menu.set_visibility("Script accent",false)
    g_menu.set_visibility("Rage Quit",false)
    g_menu.set_visibility("Show Script Developers",false)
  }
  if(g_menu.get_config_value("Fem:ui:nav")==1)
  {
    g_menu.set_visibility("<Rage Selections>",true)
    if(g_menu.get_config_value( "Fem:ssg"))
    {
      g_menu.set_visibility("SSG in air HC",true)
    }
    else
    {
      g_menu.set_visibility("SSG in air HC",false)
    }
    if(g_menu.get_config_value( "Fem:r8"))
    {
      g_menu.set_visibility("R8 in air HC",true)
    }
    else
    {
      g_menu.set_visibility("R8 in air HC",false)
    }
  }
  else
  {
   g_menu.set_visibility("SSG in air HC",false)
   g_menu.set_visibility("R8 in air HC",false) 
   g_menu.set_visibility("<Rage Selections>",false)
  }
  if(g_menu.get_config_value("Fem:ui:nav")==4)
  {
    g_menu.set_visibility("Skeet indicators",true)
    g_menu.set_visibility("Keybinds",true)
    g_menu.set_visibility("Info Tab",true)
    if(g_menu.get_config_value("Fem:visuals:infotab"))
    {
      g_menu.set_visibility("Info Flag",true)
    }
    else
    {
      g_menu.set_visibility("Info Flag",false)
    }
    g_menu.set_visibility("Info Panel",true)
    g_menu.set_visibility("Viewmodel In Scope",true)
    g_menu.set_visibility("Watermark",true)
    g_menu.set_visibility("Indicators",true)
  }
  else
  {
    g_menu.set_visibility("Skeet indicators",false)
    g_menu.set_visibility("Info Flag",false)
    g_menu.set_visibility("Keybinds",false)
    g_menu.set_visibility("Info Tab",false)
    g_menu.set_visibility("Info Panel",false)
    g_menu.set_visibility("Viewmodel In Scope",false)
    g_menu.set_visibility("Watermark",false)
    g_menu.set_visibility("Indicators",false)
  }
  if(g_menu.get_config_value("Fem:ui:nav")==2)
  {
    g_menu.set_visibility("Legs Fucker",true)
    g_menu.set_visibility("Fake Flick",true)
    if(g_menu.get_config_value("Fem:ui:aafakeflik")==true)
    {
      g_menu.set_visibility("Fake Speed",true)
    }
    else
    {
      g_menu.set_visibility("Fake Speed",false)
    }
    g_menu.set_visibility("AA Presets",true)
    if(g_menu.get_config_value("Fem:ui:aapresets")==4)
    {
      g_menu.set_visibility("AA Builder",true)
      if(g_menu.get_config_value("Fem:aa:builder")==0)
      {
        g_menu.set_visibility("[S]Yaw", true)
        g_menu.set_visibility("[S]Jitter", true)
        g_menu.set_visibility("[S]Desync", true)
        g_menu.set_visibility("[S]Fake", true)
      }
      else
      {
        g_menu.set_visibility("[S]Yaw", false)
        g_menu.set_visibility("[S]Jitter", false)
        g_menu.set_visibility("[S]Desync", false)
        g_menu.set_visibility("[S]Fake", false)
      }
      if(g_menu.get_config_value("Fem:aa:builder")==1)
      {
        g_menu.set_visibility("[W]Yaw", true)
        g_menu.set_visibility("[W]Jitter", true)
        g_menu.set_visibility("[W]Desync", true)
        g_menu.set_visibility("[W]Fake", true)
      }
      else
      {
        g_menu.set_visibility("[W]Yaw", false)
        g_menu.set_visibility("[W]Jitter", false)
        g_menu.set_visibility("[W]Desync", false)
        g_menu.set_visibility("[W]Fake", false)
      }
      if(g_menu.get_config_value("Fem:aa:builder")==2)
      {
        g_menu.set_visibility("[C]Yaw", true)
        g_menu.set_visibility("[C]Jitter", true)
        g_menu.set_visibility("[C]Desync", true)
        g_menu.set_visibility("[C]Fake", true)
      }
      else
      {
        g_menu.set_visibility("[C]Yaw", false)
        g_menu.set_visibility("[C]Jitter", false)
        g_menu.set_visibility("[C]Desync", false)
        g_menu.set_visibility("[C]Fake", false)
      }
      if(g_menu.get_config_value("Fem:aa:builder")==3)
      {
        g_menu.set_visibility("[R]Yaw", true)
        g_menu.set_visibility("[R]Jitter", true)
        g_menu.set_visibility("[R]Desync", true)
        g_menu.set_visibility("[R]Fake", true)
      }
      else
      {
        g_menu.set_visibility("[R]Yaw", false)
        g_menu.set_visibility("[R]Jitter", false)
        g_menu.set_visibility("[R]Desync", false)
        g_menu.set_visibility("[R]Fake", false)
      }
      if(g_menu.get_config_value("Fem:aa:builder")==4)
      {
        g_menu.set_visibility("[A]Yaw", true)
        g_menu.set_visibility("[A]Jitter", true)
        g_menu.set_visibility("[A]Desync", true)
        g_menu.set_visibility("[A]Fake", true)
      }
      else
      {
        g_menu.set_visibility("[A]Yaw", false)
        g_menu.set_visibility("[A]Jitter", false)
        g_menu.set_visibility("[A]Desync", false)
        g_menu.set_visibility("[A]Fake", false)
      }
    }
    else
    {
      g_menu.set_visibility("AA Builder",false)
      g_menu.set_visibility("[A]Yaw", false)
      g_menu.set_visibility("[A]Jitter", false)
      g_menu.set_visibility("[A]Desync", false)
      g_menu.set_visibility("[A]Fake", false)
      g_menu.set_visibility("[R]Yaw", false)
      g_menu.set_visibility("[R]Jitter", false)
      g_menu.set_visibility("[R]Desync", false)
      g_menu.set_visibility("[R]Fake", false)
      g_menu.set_visibility("[C]Yaw", false)
      g_menu.set_visibility("[C]Jitter", false)
      g_menu.set_visibility("[C]Desync", false)
      g_menu.set_visibility("[C]Fake", false)
      g_menu.set_visibility("[W]Yaw", false)
      g_menu.set_visibility("[W]Jitter", false)
      g_menu.set_visibility("[W]Desync", false)
      g_menu.set_visibility("[W]Fake", false)
      g_menu.set_visibility("[S]Yaw", false)
      g_menu.set_visibility("[S]Jitter", false)
      g_menu.set_visibility("[S]Desync", false)
      g_menu.set_visibility("[S]Fake", false)
    }
  }
  else
  {
    g_menu.set_visibility("Legs Fucker",false)
    g_menu.set_visibility("AA Builder",false)
    g_menu.set_visibility("[A]Yaw", false)
    g_menu.set_visibility("[A]Jitter", false)
    g_menu.set_visibility("[A]Desync", false)
    g_menu.set_visibility("[A]Fake", false)
    g_menu.set_visibility("[R]Yaw", false)
    g_menu.set_visibility("[R]Jitter", false)
    g_menu.set_visibility("[R]Desync", false)
    g_menu.set_visibility("[R]Fake", false)
    g_menu.set_visibility("[C]Yaw", false)
    g_menu.set_visibility("[C]Jitter", false)
    g_menu.set_visibility("[C]Desync", false)
    g_menu.set_visibility("[C]Fake", false)
    g_menu.set_visibility("[W]Yaw", false)
    g_menu.set_visibility("[W]Jitter", false)
    g_menu.set_visibility("[W]Desync", false)
    g_menu.set_visibility("[W]Fake", false)
    g_menu.set_visibility("[S]Yaw", false)
    g_menu.set_visibility("[S]Jitter", false)
    g_menu.set_visibility("[S]Desync", false)
    g_menu.set_visibility("[S]Fake", false)
    g_menu.set_visibility("Fake Speed",false)
    g_menu.set_visibility("Fake Flick",false)
    g_menu.set_visibility("AA Presets",false)
    g_menu.set_visibility("AA Builder",false)
  }
  if(g_menu.get_config_value("Fem:ui:nav")==3)
  {
    g_menu.set_visibility("Scaleform Hud",true) 
    g_menu.set_visibility("Clantag",true) 
    g_menu.set_visibility("Killsay",true) 
    g_menu.set_visibility("Aspect Ratio",true)
    if(g_menu.get_config_value("animated:scope:type")!=0)
    {
      g_menu.set_visibility("Scope color",true)
      g_menu.set_visibility("Scope type",true)
      g_menu.set_visibility("Speed",true)
      g_menu.set_visibility("Lenght",true)
      g_menu.set_visibility("Offset",true)
    }
    else
    {
      g_menu.set_visibility("Scope color",false)
      g_menu.set_visibility("Speed",false)
      g_menu.set_visibility("Lenght",false)
      g_menu.set_visibility("Offset",false)
    }
    g_menu.set_visibility("Buybot",true) 
    if(g_menu.get_config_value("Fem:misc:buybot"))
    {
      g_menu.set_visibility("Buybot Main",true)
      g_menu.set_visibility("Buybot Second",true)
    }
    else
    {
      g_menu.set_visibility("Buybot Main",false)
      g_menu.set_visibility("Buybot Second",false)
    }
    
  }
  else
  {
    g_menu.set_visibility("Scope color",false)
    g_menu.set_visibility("Scope type",false)
    g_menu.set_visibility("Speed",false)
    g_menu.set_visibility("Lenght",false)
    g_menu.set_visibility("Offset",false)
    g_menu.set_visibility("Scaleform Hud",false) 
    g_menu.set_visibility("Clantag",false) 
    g_menu.set_visibility("Killsay",false) 
    g_menu.set_visibility("Aspect Ratio",false) 
    g_menu.set_visibility("Buybot",false)
    g_menu.set_visibility("Buybot Main",false)
    g_menu.set_visibility("Buybot Second",false)
  }

}

function scope()
{
    var local_idx = g_entity.get_local_player( )
    var scope_color = g_menu.get_config_value("animated:scope:color")
    var is_scoped = g_entity.get_netvar( local_idx, "DT_CSPlayer", "m_bIsScoped" )
    var valid = g_entity.is_valid( local_idx )

    if(valid)
    {
        if(g_menu.get_config_value( "animated:scope:type" )==1)
        {
           g_menu.set_config_value_int( "vanity:environment:noscope", 3 )
            g_render.render_gradient_rect(x/2+g_menu.get_config_value( "animated:scope:offset" ),y/2,leng,1,scope_color[0],scope_color[1],scope_color[2],255,scope_color[0],scope_color[1],scope_color[2],0)
            g_render.render_gradient_rect(x/2-g_menu.get_config_value( "animated:scope:offset" ),y/2,-1*leng,1,scope_color[0],scope_color[1],scope_color[2],255,scope_color[0],scope_color[1],scope_color[2],0)
            g_render.render_gradient_rect(x/2,y/2-g_menu.get_config_value( "animated:scope:offset" ),1,-1*leng,scope_color[0],scope_color[1],scope_color[2],255,scope_color[0],scope_color[1],scope_color[2],0,true)
            g_render.render_gradient_rect(x/2,y/2+g_menu.get_config_value( "animated:scope:offset" ),1,leng,scope_color[0],scope_color[1],scope_color[2],255,scope_color[0],scope_color[1],scope_color[2],0,true)
        }
        if(g_menu.get_config_value( "animated:scope:type" )==2)
        {
          g_menu.set_config_value_int( "vanity:environment:noscope", 3 )
            g_render.render_gradient_rect(x/2+g_menu.get_config_value( "animated:scope:offset" ),y/2,leng,1,scope_color[0],scope_color[1],scope_color[2],0,scope_color[0],scope_color[1],scope_color[2],255)
            g_render.render_gradient_rect(x/2-g_menu.get_config_value( "animated:scope:offset" ),y/2,-1*leng,1,scope_color[0],scope_color[1],scope_color[2],0,scope_color[0],scope_color[1],scope_color[2],255)
            g_render.render_gradient_rect(x/2,y/2-g_menu.get_config_value( "animated:scope:offset" ),1,-1*leng,scope_color[0],scope_color[1],scope_color[2],0,scope_color[0],scope_color[1],scope_color[2],255,true)
            g_render.render_gradient_rect(x/2,y/2+g_menu.get_config_value( "animated:scope:offset" ),1,leng,scope_color[0],scope_color[1],scope_color[2],0,scope_color[0],scope_color[1],scope_color[2],255,true)
        }
    }
    if(is_scoped)
    {
        leng=lerp(leng,g_menu.get_config_value( "animated:scope:lengt" ),g_menu.get_config_value("animated:speed"))
    }
    else
    {
        leng=lerp(leng,0,g_menu.get_config_value("animated:speed"))
    }
    
}

function on_unload()
{
    g_menu.set_config_value_int( "vanity:environment:noscope", st )
    g_cvar.execute_client_cmd("clear");
}

function rage()
{
  var flags = g_entity.get_netvar( local_index, "DT_BasePlayer", "m_fFlags" )
  var wpn = g_entity.get_netvar( local_index, "DT_BaseCombatCharacter", "m_hActiveWeapon" )
  var wpn_idx=g_entity.get_entity_from_handle( wpn )
  item_def_idx = g_entity.get_item_definition_index( wpn_idx)
  if(flags==256)
  {
    if(g_menu.get_config_value("Fem:ssg"))
    {
      g_menu.set_config_value_int( "rage:scout_hitchance",  g_menu.get_config_value("Fem:ssg:hc") )
    }
    if(g_menu.get_config_value("Fem:r8"))
    {
      g_menu.set_config_value_int( "rage:r8_hitchance", g_menu.get_config_value("Fem:r8:hc") )
    }    
  }
  else
  {
    g_menu.set_config_value_int( "rage:scout_hitchance", shco )
    g_menu.set_config_value_int( "rage:r8_hitchance", r8hco )
  }

}
var fdtp=1
anim=0;
animbg=0;
var kbxbs = kbx
function visuals()
{


  var clr = g_menu.get_config_value("Fem:ui:color")


  //menu watermark
  menu_x = g_menu.get_menu_position()[0] // x-axis
  menu_y = g_menu.get_menu_position()[1] // y-axis
  menu_w = g_menu.get_menu_size()[0] // width
  menu_h = g_menu.get_menu_size()[1] // height
  var mwtr= username+" - "+uid
  var mwtrlng = g_render.get_text_width(mwtr, "UI4")
  if(g_menu.get_menu_open())
  {
    g_render.render_line(menu_x,menu_y-10,menu_x+menu_w,menu_y-10,255,255,255,255)
    g_render.draw_string(menu_x,menu_y-30,"Fem","UI4",255,255,255,255)
    g_render.draw_string(menu_x+menu_w-mwtrlng,menu_y-30,mwtr,"UI4",255,255,255,255)
    g_render.draw_string(menu_x+g_render.get_text_width("Fem", "UI4"),menu_y-30,".JS","UI4",clr[0],clr[1],clr[2],255)
  }

  if(fdtp==1)
      {
        if(fade<255)
        {
          if(Date.now()%2==0)
          {
            fade=fade+5
          }
        }
        else
        {
          fdtp=2;
        }
      }
      
      if(fdtp!=1)
      {
        if(fade>0)
        {
          if(Date.now()%2==0)
          {
            fade=fade-5
          }
        }
        else
        {
          fdtp=1;
        }
      }
  var flags = g_entity.get_netvar( local_index, "DT_BasePlayer", "m_fFlags" )
  var wpn = g_entity.get_netvar( local_index, "DT_BaseCombatCharacter", "m_hActiveWeapon" )
  var wpn_idx=g_entity.get_entity_from_handle( wpn )
  item_def_idx = g_entity.get_item_definition_index( wpn_idx)
  var valid = g_entity.is_valid( local_index )
  var hp =g_entity.get_netvar( local_index, "DT_BasePlayer", "m_iHealth" )
  mouse_x = g_input.get_mouse_pos()[0] // x
  mouse_y = g_input.get_mouse_pos()[1] // y
  m1=g_input.get_key_down(1)
  if(valid)
  {
      //flags
        var infotxt1 =("Script : ");
        var infotxt2 = "Version : ";
        if(g_menu.get_config_value("Fem:visuals:infotab"))
        {
            g_render.render_gradient_rect(5, screeny/2, 90, 29, clr[0],clr[1],clr[2], 100, clr[0],clr[1],clr[2], 0)
            if(g_menu.get_config_value("Fem:visual:infoflag") == 1)
            {
             g_render.draw_rectangle_filled(7, screeny/2+18, 45, 8, 255, 251, 0, 255)
             g_render.draw_rectangle_filled(7, screeny/2+10, 45, 8, 255, 0, 0, 255)
             g_render.draw_rectangle_filled(7, screeny/2+2, 45, 8, 0, 0, 0, 255)
            }
            if(g_menu.get_config_value("Fem:visual:infoflag") == 4)
            {
             g_render.draw_rectangle_filled(7, screeny/2+18, 45, 8, 255, 0, 0, 255)
             g_render.draw_rectangle_filled(7, screeny/2+10, 45, 8, 0, 0, 255, 255)
             g_render.draw_rectangle_filled(7, screeny/2+2, 45, 8, 255, 255, 255, 255)
            }
            if(g_menu.get_config_value("Fem:visual:infoflag") == 0)
            {
             g_render.draw_rectangle_filled(7, screeny/2+2, 15, 24, 0, 0, 255, 255)
             g_render.draw_rectangle_filled(22, screeny/2+2, 15, 24, 255, 251, 0, 255)
             g_render.draw_rectangle_filled(37, screeny/2+2, 15, 24, 255, 0, 0, 255)
            }
            if(g_menu.get_config_value("Fem:visual:infoflag") == 2)
            {
             g_render.draw_rectangle_filled(7, screeny/2+2, 15, 24, 0, 0, 255, 255)
             g_render.draw_rectangle_filled(22, screeny/2+2, 15, 24, 255, 255, 255, 255)
             g_render.draw_rectangle_filled(37, screeny/2+2, 15, 24, 255, 0, 0, 255)
            }
            if(g_menu.get_config_value("Fem:visual:infoflag") == 3)
            {
             g_render.draw_rectangle_filled(7, screeny/2+2, 15, 24, 39, 98, 0, 255)
             g_render.draw_rectangle_filled(22, screeny/2+2, 15, 24, 255, 255, 255, 255)
             g_render.draw_rectangle_filled(37, screeny/2+2, 15, 24, 255, 0, 0, 255)
            }
            if(g_menu.get_config_value("Fem:visual:infoflag") == 5)
            {
             g_render.draw_rectangle_filled(7, screeny/2+14, 45, 12, 255, 0, 0, 255)
             g_render.draw_rectangle_filled(7, screeny/2+2, 45, 12, 255, 255, 255, 255)
            }
            g_render.draw_string(55, y/2+2, infotxt1,  "UI1" , 255, 255, 255, 255)
            g_render.draw_string(91, y/2+2, "[Fem.js]",  "UI1" , clr[0],clr[1],clr[2], fade)
            g_render.draw_string(55, y/2+14, infotxt2,  "UI1" , 255, 255, 255, 255)
            g_render.draw_string(101, y/2+14, "[Alpha 1.0]",  "UI1" ,clr[0],clr[1],clr[2], fade)     
          
        }
        
      
      //indicators ►
      if(g_menu.get_config_value("Fem:visuals:indicators"))
      {
        g_render.draw_string(x/2+30,y/2-22,"▷","Arrows",arrowclr1[0],arrowclr1[1],arrowclr1[2],255)
        g_render.draw_string(x/2-60,y/2-21,"◁","Arrows",arrowclr2[0],arrowclr2[1],arrowclr2[2],255)
        if(g_menu.get_config_value("antiaim:inverter"))
        {
          arrowclr1=[clr[0],clr[1],clr[2]]
          arrowclr2=[255,255,255]
        }
        else
        {
          arrowclr2=[clr[0],clr[1],clr[2]]
          arrowclr1=[255,255,255]
        }

        g_render.draw_string(anim0+5,anim1+10, "Fem",  "Pixel" , 255, 255, 255, 255)
        g_render.draw_string(anim0+5+g_render.get_text_width("Fem ","Pixel"),anim1+10, ".JS",  "Pixel" , clr[0],clr[1],clr[2], fade)
        if(item_def_idx==40)
        {
          g_render.draw_string(anim0+5,anim1+21,"DMG | "+g_menu.get_config_value("rage:scout_dmg"),  "Pixel" , 255, 255, 255, 255)  
        }
        else
        {
          if(item_def_idx==11||item_def_idx==38)
          {
            g_render.draw_string(anim0+5,anim1+21,"DMG | "+g_menu.get_config_value("rage:auto_dmg"),  "Pixel" , 255, 255, 255, 255)
          }
          else
          {
            if(item_def_idx==4||item_def_idx==30||item_def_idx==2||item_def_idx==36||item_def_idx==3||item_def_idx==32||item_def_idx==61||item_def_idx==63)
            {
              g_render.draw_string(anim0+5,anim1+21,"DMG | "+g_menu.get_config_value("rage:pistol_dmg"),  "Pixel" , 255, 255, 255, 255)
            }
            else
            {
              if(item_def_idx==9)
              {
                g_render.draw_string(anim0+5,anim1+21,"DMG | "+g_menu.get_config_value("rage:awp_dmg"),  "Pixel" , 255, 255, 255, 255)
              }
              else
              {
                if(item_def_idx==1)
                {
                  g_render.draw_string(anim0+5,anim1+21,"DMG | "+g_menu.get_config_value("rage:deagle_dmg"),  "Pixel" , 255, 255, 255, 255)
                }
                else
                {
                  if(item_def_idx==64)
                  {
                    g_render.draw_string(anim0+5,anim1+21, "DMG | "+g_menu.get_config_value("rage:r8_dmg"),  "Pixel" , 255, 255, 255, 255) 
                  }
                  else
                  {
                    g_render.draw_string(anim0+5,anim1+21, "DMG | "+g_menu.get_config_value("rage:other_dmg"),  "Pixel" , 255, 255, 255, 255)
                  }
                  
                }
              }
            }
          }
        }
        g_render.draw_string(anim0+5,dtanim, "DT",  "Pixel" , dtcolor[0],dtcolor[1],dtcolor[2], dtalpha)
        g_render.draw_string(anim0+20,dtanim, Math.trunc((g_tickbase.get_ticks_allowed( )/14)*100) + "%",  "Pixel" , 255,255,255, dtalpha)
        g_render.draw_string(anim0+5,idealtickanim, "Ideal tick",  "Pixel" , 255,255,255, idealtalpha)
        if(g_menu.get_config_value("rage:doubletap")&&g_menu.get_config_value("misc:auto_peek"))
        {
          idealtalpha=lerp(idealtalpha,255,50)
          idealtickanim=lerp(idealtickanim,anim1+31,50)
          dtalpha=lerp(dtalpha,0,50)
          dtanim=lerp(dtanim,anim1,50)
        }
        else
        {
          idealtickanim=lerp(idealtickanim,anim1,50)
          idealtalpha=lerp(idealtalpha,0,50)
          if(g_menu.get_config_value("rage:doubletap"))
          {
            dtalpha=lerp(dtalpha,255,50)
            dtanim=lerp(dtanim,anim1+31,50)
            if((g_tickbase.get_ticks_allowed( )<12))
            {
              dtcolor=[255,0,0]
            }
            else
            {
              dtcolor=[255,255,255]
            }
          }
          else
          {
            dtanim=lerp(dtanim,anim1,50)
            dtalpha=lerp(dtalpha,0,50)
          }
        }
        
        var is_scoped = g_entity.get_netvar( local_index, "DT_CSPlayer", "m_bIsScoped" )
        if(is_scoped)
        {
          anim0=lerp(anim0, x/2+13, 50)
          anim1=lerp(anim1, y/2+10, 50)
        }
        else
        {
          anim0=lerp(anim0, x/2-25, 50)
          anim1=lerp(anim1, y/2+10, 50)
        }
      }
      if(g_menu.get_config_value("Fem:visuals:viewmodelins"))
      {
        g_cvar.set_int("fov_cs_debug", 90)
      }
      else
      {
        g_cvar.set_int("fov_cs_debug", 0)
      }
      if(g_menu.get_config_value("Fem:visuals:infopanel"))
      {
        var pnlx = g_menu.get_config_value("Fem:pnlx")
        var pnly = g_menu.get_config_value("Fem:pnly")
      var flags = g_entity.get_netvar( local_index, "DT_BasePlayer", "m_fFlags" )
      velocity_x = parseInt(g_entity['get_netvar'](local_index, 'DT_LocalPlayerExclusive', 'm_vecVelocity[0]')[0]);
      velocity_y = parseInt(g_entity['get_netvar'](local_index, 'DT_LocalPlayerExclusive', 'm_vecVelocity[0]')[1]);
      velocity = Math.sqrt(velocity_x * velocity_x + velocity_y * velocity_y);
      var hp =g_entity.get_netvar( local_index, "DT_BasePlayer", "m_iHealth" )
      var fsttxt = "Fem.js Panel | Welcome Back"
      var pnllng =  g_render.get_text_width(fsttxt, "UI2")
      g_render.draw_rectangle_filled(pnlx,pnly,pnllng+20,101,0,0,0,70)
      g_render.draw_rectangle_filled(pnlx,pnly,pnllng+20,2,clr[0],clr[1],clr[2],255)
      g_render.draw_rectangle_filled(pnlx,pnly+100,pnllng+22,2,clr[0],clr[1],clr[2],255)
      g_render.draw_rectangle_filled(pnlx+pnllng+20,pnly,2,100,clr[0],clr[1],clr[2],255)
      g_render.draw_rectangle_filled(pnlx,pnly,2,100,clr[0],clr[1],clr[2],255)
      g_render.draw_string(pnlx+5,pnly+5,fsttxt,"UI2",255,255,255,255)
      if(hp>0)
      {
        if(flags==257)
        {
      
          if(velocity<=2)
          {
            g_render.draw_string(pnlx+5,pnly+20,"Player State : Standing","UI2",255,255,255,255)
          }
          if(velocity>=3&&velocity<=130)
          {
            g_render.draw_string(pnlx+5,pnly+20,"Player State : Walking","UI2",255,255,255,255)
          }
          if(velocity>=131||velocity>=250)
          {
            g_render.draw_string(pnlx+5,pnly+20,"Player State : Running","UI2",255,255,255,255)
          }
        }
        if(flags==256)
        {
          g_render.draw_string(pnlx+5,pnly+20,"Player State : In Air","UI2",255,255,255,255)
        }
        if(flags==263||flags==261)
        {
          g_render.draw_string(pnlx+5,pnly+20,"Player State : Crouched","UI2",255,255,255,255)
        }
        if(flags==262)
        {
          g_render.draw_string(pnlx+5,pnly+20,"Player State : Air-crouch","UI2",255,255,255,255)
        }
      }
      else
      {
        g_render.draw_string(pnlx+5,pnly+20,"Player State : Dead :(","UI2",255,255,255,255)
      }
      g_render.draw_string(pnlx+5,pnly+35,"Latency | "+Math.trunc(g_globals.get_latency( ))+"ms","UI2",255,255,255,255)
      g_render.draw_string(pnlx+5,pnly+50,"Forum Name | "+username+"-"+uid,"UI2",255,255,255,255)
      g_render.draw_string(pnlx+5,pnly+65,"Chocked commands | "+g_globals.get_choked_commands( ),"UI2",255,255,255,255)
      g_render.draw_rectangle_filled(pnlx+6.5,pnly+80, 10+10*g_globals.get_choked_commands( ), 10, clr[0],clr[1],clr[2], 255)
      if(in_bounds(pnlx, pnly, pnllng+20, 101))
      {
        g_menu.set_config_value_int("Fem:pnlx",mouse_x - endcord1[0])
        g_menu.set_config_value_int("Fem:pnly",mouse_y - endcord1[1])
      }
      else
      {
        endcord1[0] = mouse_x - g_menu.get_config_value("Fem:pnlx")
        endcord1[1] = mouse_y - g_menu.get_config_value("Fem:pnly")
      }
      }
      if(g_menu.get_config_value("Fem:visuals:keybinds"))
      {
        var kbx = g_menu.get_config_value("Fem:kbx")
        var kby = g_menu.get_config_value("Fem:kby")
        var kb = g_menu.get_active_keybinds()
        var kbxb = kbx + 5
        var kbxbs =kbx + 160
        var kbys = kby + 22
        mouse_x = g_input.get_mouse_pos()[0] // x
        mouse_y = g_input.get_mouse_pos()[1] // y
        m1=g_input.get_key_down(1)
        //dynamic position(ig)
        if(in_bounds(kbx-6, kby, 167, 30+(12*kb.length)))
        {
          g_menu.set_config_value_int("Fem:kbx",mouse_x - endcord[0])
          g_menu.set_config_value_int("Fem:kby",mouse_y - endcord[1])
        }
        else
        {
          endcord[0] = mouse_x - g_menu.get_config_value("Fem:kbx")
          endcord[1] = mouse_y - g_menu.get_config_value("Fem:kby")
        }
        if (g_menu.get_config_value("Fem:visuals:keybinds")==true)
        {       
        if(valid)
        {
          g_render.draw_rectangle_filled(kbx, kby, kbxbs-kbx, 2, clr[0],clr[1],clr[2], anim)
          g_render.draw_rectangle_filled(kbx, kby + 2,  kbxbs-kbx, 20, 0,0,0,animbg)
          g_render.render_gradient_rect(kbx-2,kby+1,2,20,clr[0],clr[1],clr[2], anim,clr[0],clr[1],clr[2],0,true)
          g_render.render_gradient_rect(kbx+160,kby+1,2,20,clr[0],clr[1],clr[2], anim,clr[0],clr[1],clr[2],0,true)
          g_render.draw_string(kbx+( kbxbs-kbx)/2-(g_render.get_text_width("keybinds","UI1"))/2, kby + 5, "Keybinds", "UI1", 255, 255, 255, anim)
          if(kb.length>0)
          {
            if(g_menu.get_menu_open())
            {
              kbindanim = lerp(kbindanim,255,30)
            }
            else
            {
              kbindanim = lerp(kbindanim,0,30)
            }
            g_render.draw_rectangle_filled(kbx-6,kby-6,kbxbs-kbx+12, 1,255,255,255,kbindanim)
            g_render.draw_rectangle_filled(kbx-6,kby-5,1, 36+(12*kb.length),255,255,255,kbindanim)
            g_render.draw_rectangle_filled(kbx-6+kbxbs-kbx+12,kby-6,1, 37+(12*kb.length),255,255,255,kbindanim)
            g_render.draw_rectangle_filled(kbx-6,kby+30+(12*kb.length),kbxbs-kbx+12, 1,255,255,255,kbindanim)
            anim=lerp(anim,255,50)
            animbg=lerp(animbg,100,50)
          }
          else
          {
            anim=lerp(anim,0,50)
            animbg=lerp(animbg,0,50)
          }
        for(i=0; i<kb.length; i++)
        {     
        g_render.draw_string(kbxb-5, kbys+i*doffset, "> "+kb[i][0],  "UI1" , 255, 255, 255, anim)
        kbs=kb[i][1]
        switch(kbs)
        {
          case 0:
           {
            kbs="[Toggled]"
            break;
           }
          case 1:
           {
            kbs="[Hold On]"
            break;
           }
            case 2:
            {
             kbs="[Hold Off]"
             break;
            }
            case 3:
            {
            kbs="[Always]"
            break;
            }    
        }
        g_render.draw_string(kbxbs- g_render.get_text_width(kbs, "UI1"), kbys+i*doffset, kbs,  "UI1" , 255, 255, 255, anim)
        }
        }
        }    
      }
    
  }
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var wtrmrktxt ="Fem.js | "+username+" | uid: "+uid+" | "+hours+":"+minutes+":"+seconds+" ";
  var wtrtxt2 = "Fake Lag : "+g_globals.get_choked_commands( )+" | "+Math.trunc(1/g_globals.get_frametime( ))+" FPS | Ping : "+Math.trunc(g_globals.get_latency( ))+" ms"
  var wtr =  g_render.get_text_width(wtrmrktxt, "UI1")
  var wtrlng2 = g_render.get_text_width(wtrtxt2, "UI1")
  if(g_menu.get_config_value("Fem:visuals:watermark"))
  {
    g_render.draw_rectangle_filled(x-wtr-40,22,wtr+11,1, clr[0],clr[1],clr[2],255)
    g_render.render_gradient_rect(x-wtr-41,23,1,16, clr[0],clr[1],clr[2],255,0,0,0,0,true)
    g_render.render_gradient_rect(x-wtr-40+wtr+11,23,1,16, clr[0],clr[1],clr[2],255,0,0,0,0,true)
    g_render.draw_rectangle_filled(x-wtr-40,23,wtr+10,16,0,0,0,100)
    g_render.draw_string(x-wtr-35,24,wtrmrktxt,"UI1",255,255,255,255)

    //panel 2
    g_render.draw_rectangle_filled(x-wtrlng2-40,47,wtrlng2+11,1, clr[0],clr[1],clr[2],255)
    g_render.render_gradient_rect(x-wtrlng2-41,48,1,16, clr[0],clr[1],clr[2],255,0,0,0,0,true)
    g_render.render_gradient_rect(x-wtrlng2-40+wtrlng2+11,48,1,16, clr[0],clr[1],clr[2],255,0,0,0,0,true)
    g_render.draw_rectangle_filled(x-wtrlng2-40,48,wtrlng2+10,16,0,0,0,100)
    g_render.draw_string(x-wtrlng2-35,49,wtrtxt2,"UI1",255,255,255,255)
  }
}
function aspect_ratio()
{
  menu_ratio = g_menu.get_config_value("Fem:visuals:aspect_ratio")
  if (menu_ratio != old_value)
  {
    g_cvar.set_float("r_aspectratio", (menu_ratio / 100));
    old_value = menu_ratio
  }
}


g_menu.add_config_value_int( "Fem:visuals:hitmarker_type", 0 )
g_menu.add_config_value_int( "Fem:visuals:damagemarker_type", 0 )
g_menu.add_config_value_color( "Fem:visuals:hitmarker", 255,255,255,255 )
g_menu.add_config_value_color( "Fem:visuals:damagemarker_color", 255,255,255,255 )
g_menu.add_colorpicker("Hit marker color", "Fem:visuals:hitmarker_color")
g_menu.add_combo("Hit marker type", "Fem:visuals:hitmarker_type", "Off", "Cross ( + )", "Cross ( x )");
g_menu.add_colorpicker("Damage marker color", "Fem:visuals:damagemarker_color")
g_menu.add_combo("Damage marker type", "Fem:visuals:damagemarker_type", "Off", "Static", "Move up");

Math.clamp = function(x, min, max)
{
  return Math.max(min,Math.min(max,x))
}
const unpack_arr = function( arr , i)
{
    i = i || 0
    if (i<arr.length){
        return arr[i],unpack_arr(arr,i+1)
    }
    return arr[i]
}
var vector = function(x,y,z)
{
    var this_type = { x : x || 0, y : y || 0, z : z || 0}
    this_type.length = function()
    {
        return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)
    }
    this_type.length2d = function()
    {
        return Math.sqrt(this.x*this.x+this.y*this.y)
    }
    return this_type
}
var color = function(r,g,b,a){
    var this_type = { r : r!=null?r:255,g : g!=null?g:255,b : b!=null?b:255,a : a!=null?a:255}
    return this_type
}
const print = function(str)
{
    return g_cheat.notify(String(str))
}
var fontflags = { antialiasing: 2, outline: 4, dropshadow: 8 }
var render = {}
render.lerp = function (value, new_value, speed) {
    if (speed == null) { speed = 0.33 }
    if (new_value - value <= 1 && value - new_value <= 1) { value = new_value }
    value += (((new_value - value) * speed) * 60 / globals.fps)
    return value
}
render.is_hovered = function (min, max) {
    var mouse_pos = g_input.get_mouse_pos(); mouse_pos = vector(mouse_pos[0], mouse_pos[1])
    return mouse_pos.x >= min.x && mouse_pos.x <= max.x && mouse_pos.y >= min.y && mouse_pos.y <= max.y
}
render.create_font = function (name, size, weight, flags) {
    flags = flags || 0;
    var varname = "torre:recode:font:" + String(name) + ":" + String(size) + ":" + String(weight) + ":" + String(flags);
    g_render.create_font(varname, name, size, weight, flags);
    return varname;
}
render.measure_text = function (title, font) {
    var width = g_render.get_text_width(title, font)
    return vector(width)
}
render.text = function (text, pos, font, col) {
    col = col != null ? col : color();
    return g_render.draw_string(pos.x, pos.y, text, font, col.r, col.g, col.b, col.a);
}
render.world_to_screen = function (position) {
    var actual = g_render.world_to_screen(position.x, position.y, position.z)
    return vector(actual[0], actual[1], actual[2])
}
render.line = function (from, to, col) {
    return g_render.render_line(from.x, from.y, to.x, to.y, col.r, col.g, col.b, col.a)
}
render.circle = function (position, radius, col) {
    return g_render.render_circle(position.x, position.y, radius, 30 + radius * 5, col.r, col.g, col.b, col.a)
}
render.rect = function (from, to, col, border_size) {
    col = col != null ? col : color()
    border_size = border_size || 1
    if (from.x > to.x) {
        var n = from.x
        from.x = to.x
        to.x = n
    }
    if (from.y > to.y) {
        var n = from.y
        from.y = to.y
        to.y = n
    }
    g_render.draw_rectangle_filled(from.x, from.y, to.x - from.x, border_size, col.r, col.g, col.b, col.a)//sus
    g_render.draw_rectangle_filled(from.x, to.y - border_size, to.x - from.x, border_size, col.r, col.g, col.b, col.a)//jos
    g_render.draw_rectangle_filled(from.x, from.y + border_size, border_size, to.y - from.y - border_size * 2, col.r, col.g, col.b, col.a)//stanga
    g_render.draw_rectangle_filled(to.x - border_size, from.y + border_size, border_size, to.y - from.y - border_size * 2, col.r, col.g, col.b, col.a)//dreapta
}
render.rect_filled = function (from, to, col) {
    col = col != null ? col : color()
    if (from.x > to.x) {
        var n = from.x
        from.x = to.x
        to.x = n
    }
    if (from.y > to.y) {
        var n = from.y
        from.y = to.y
        to.y = n
    }
    return g_render.draw_rectangle_filled(from.x, from.y, to.x - from.x, to.y - from.y, col.r, col.g, col.b, col.a)
}
render.rect_fade = function (from, to, color_a, color_b, is_horizontal) {
    is_horizontal = !is_horizontal
    if (from.x > to.x) {
        var n = from.x
        from.x = to.x
        to.x = n
    }
    if (from.y > to.y) {
        var n = from.y
        from.y = to.y
        to.y = n
    }
    return g_render.render_gradient_rect(from.x, from.y, to.x - from.x, to.y - from.y, color_a.r, color_a.g, color_a.b, color_a.a, color_b.r, color_b.g, color_b.b, color_b.a, is_horizontal)
}
render.polygon = function (points, col) {
    col = col != null ? col : color()
    var new_points = []
    for (i = 0; i < points.length; i += 0) {
        point = points[i]
        new_points[new_points.length] = [point.x, point.y]
    }
    //var render_args = new_points.concat([col.r,col.g,col.b,col.a])
    return g_render.render_polygon(new_points, col.r, col.g, col.b, col.a)
}
render.screen_size = function () {
    var sc_sz = g_render.get_screen_size();
    return vector(sc_sz[0], sc_sz[1]);
}
render.mouse_pos = function () {
    var sc_sz = g_input.get_mouse_pos();
    return vector(sc_sz[0], sc_sz[1]);
}
var marker_font = [render.create_font("verdana", 18, 500, fontflags.antialiasing),render.create_font("verdana", 13, 400, fontflags.dropshadow+fontflags.antialiasing)]
var bPoint = function(pos, damage, time)
{   
    var this_type = { pos : pos || vector(), damage : damage || 0, time : time || g_globals.get_curtime( )}
    return this_type;
}
var impacts = []
var render_points = []
var add_time = 2.7
function bRenderMarkers()
{
    var lp = g_entity.get_local_player( )
    if (!lp) {
        render_points = []
        impacts = []
        return 0;
    }
    var curtime = g_globals.get_curtime( )
    var removal = -1
    var fade = { in:0.1,out:0.3}
    var cross_size = 4
    var hitmarker_type = g_menu.get_config_value( "Fem:visuals:hitmarker_type" )
    var hitmarker_color = g_menu.get_config_value( "Fem:visuals:hitmarker_color" )
    var damagemarker_type = g_menu.get_config_value( "Fem:visuals:damagemarker_type" )
    var damagemarker_color = g_menu.get_config_value( "Fem:visuals:damagemarker_color" )
    for(var i = 0; i < render_points.length;i+=1) {
        var vec = render_points[i].pos
        var time_diff = render_points[i].time-curtime
        var alpha = 255;
        if((add_time-time_diff)<fade.in){
            alpha = (add_time-time_diff)/fade.in*255
        }
        else if (time_diff<fade.out){
            alpha = time_diff/fade.out*255
        }
        if(time_diff<0){
            removal = i
            alpha = 0
        }
        var screen_pos = g_render.world_to_screen( vec.x, vec.y, vec.z )
        //g_render.render_circle(screen_pos[0], screen_pos[1], 10, 40, 255, 89, 41,120)
        var damage_add = 0
        if(hitmarker_type==1){
            g_render.render_line(screen_pos[0]-cross_size, screen_pos[1], screen_pos[0]+cross_size, screen_pos[1], hitmarker_color[0], hitmarker_color[1], hitmarker_color[2], alpha)
            g_render.render_line(screen_pos[0], screen_pos[1]-cross_size, screen_pos[0], screen_pos[1]+cross_size, hitmarker_color[0], hitmarker_color[1], hitmarker_color[2], alpha)
            damage_add = 11
        }
        else if (hitmarker_type==2){
            var spacing = 3
            var length = 3
            g_render.render_line(screen_pos[0]-spacing-length, screen_pos[1]-spacing-length, screen_pos[0]-spacing, screen_pos[1]-spacing, hitmarker_color[0], hitmarker_color[1], hitmarker_color[2], alpha)
            g_render.render_line(screen_pos[0]+spacing+length, screen_pos[1]-spacing-length, screen_pos[0]+spacing, screen_pos[1]-spacing, hitmarker_color[0], hitmarker_color[1], hitmarker_color[2], alpha)
            g_render.render_line(screen_pos[0]+spacing, screen_pos[1]+spacing, screen_pos[0]+spacing+length, screen_pos[1]+spacing+length, hitmarker_color[0], hitmarker_color[1], hitmarker_color[2], alpha)
            g_render.render_line(screen_pos[0]-spacing, screen_pos[1]+spacing, screen_pos[0]-spacing-length, screen_pos[1]+spacing+length, hitmarker_color[0], hitmarker_color[1], hitmarker_color[2], alpha)
            damage_add = 14
        }
        if(damagemarker_type==1){
            var damage = String(render_points[i].damage)
            if (render_points[i].damage!=0){
                var size = render.measure_text(damage,marker_font[0])
                render.text(damage,vector(screen_pos[0]-size.x*0.5,screen_pos[1]-damage_add-11),marker_font[0],color(damagemarker_color[0], damagemarker_color[1], damagemarker_color[2], alpha))
            }
        }
        else if (damagemarker_type==2){
            var damage = String(render_points[i].damage)
            if (render_points[i].damage!=0){
                var size = render.measure_text(damage,marker_font[01])
                var add = (1-time_diff/add_time)*68
                render.text(damage,vector(screen_pos[0]-size.x*0.5,screen_pos[1]-damage_add-11-add),marker_font[1],color(damagemarker_color[0], damagemarker_color[1], damagemarker_color[2], alpha))
            }
        }
    }
    if(removal!=-1) {
        render_points.splice(removal, 1)
    }
}
add_callback("on_render", "bRenderMarkers")
function bRenderImpact()
{   
    var lp = g_entity.get_local_player( )
    if (!lp || lp!=g_entity.get_player_for_user_id(g_event.get_int("userid"))) return 0;
    var vec = vector(g_event.get_float("x"),g_event.get_float("y"),g_event.get_float("z"))
    impacts[impacts.length] = vec
}
add_callback("bullet_impact", "bRenderImpact")

function bPlayerHurt()
{   
    var lp = g_entity.get_local_player( )
    var attacker = g_event.get_int("attacker")
    var userid = g_event.get_int("userid")
    if (!lp || !userid || !attacker ) return 0;
    attacker = g_entity.get_player_for_user_id(attacker)
    userid = g_entity.get_player_for_user_id(userid)
    if (lp!=attacker || lp==userid) return 0;
    var target_origin = g_entity.get_netvar( userid, "DT_BaseEntity", "m_vecOrigin" )
    /*var lp_origin = g_entity.get_netvar( lp, "DT_BaseEntity", "m_vecOrigin" )
    var origin_diff = vector(lp_origin[0]-target_origin[0],lp_origin[1]-target_origin[1],0).length()
    var point_diff = vector(vec.x-target_origin[0],vec.y-target_origin[1],0)*/
    var point_limit = Math.clamp(impacts.length,1,3)
    var best_pct = { diff : 999, vec : impacts[impacts.length-1]}
    for(var n = 0; n<point_limit;n+=1){
        var point = impacts[impacts.length-1-n]
        var diff = vector(point.x-target_origin[0],point.y-target_origin[1],point.z-target_origin[2]).length()
        if (diff<best_pct.diff) {
            best_pct = { diff : diff, vec : point}
        }
    }
    render_points[render_points.length] = bPoint(best_pct.vec,g_event.get_int("dmg_health"), g_globals.get_curtime( )+add_time)
    impacts = []
}
add_callback("player_hurt", "bPlayerHurt")

function buy_bot()
{
 if(g_menu.get_config_value("Fem:misc:buybot"))
 {
  if(g_menu.get_config_value("Fem:misc:buybotmain")==0)
  {
    g_cvar.execute_client_cmd("buy ssg08")
  }
  if(g_menu.get_config_value("Fem:misc:buybotmain")==1)
  {
    g_cvar.execute_client_cmd("buy scar20; buy g3sg1")
  }
  if(g_menu.get_config_value("Fem:misc:buybotmain")==2)
  {
    g_cvar.execute_client_cmd("buy awp")
  }
  if(g_menu.get_config_value("Fem:misc:buybotsecond")==0)
  {
    g_cvar.execute_client_cmd("buy tec9; buy fiveseven")
  }
  if(g_menu.get_config_value("Fem:misc:buybotsecond")==1)
  {
    g_cvar.execute_client_cmd("buy elite")
  }
  if(g_menu.get_config_value("Fem:misc:buybotsecond")==2)
  {
    g_cvar.execute_client_cmd("buy deagle")
  }
  if(g_menu.get_config_value("Fem:misc:buybotsecond")==3)
  {
    g_cvar.execute_client_cmd("buy p250")
  }
  g_cvar.execute_client_cmd("buy vesthelm; buy Taser; buy vest; buy smokegrenade; buy hegrenade; buy molotov; buy incgrenade; buy defuser")
  g_cvar.execute_client_cmd("clear")
 }
}
const say = ["I hate nig..|discord.gg/3Ne4htuPTn|","Muie la Flashy","Iti place pul..|discord.gg/3Ne4htuPTn|","Uite coaie joaca auto..|discord.gg/3Ne4htuPTn|","Fem>>all..|discord.gg/3Ne4htuPTn|","Go buy lefish..|discord.gg/3Ne4htuPTn|","1 by Bangladesh jitter"]
function killsay( ) {
 if(g_menu.get_config_value("Fem:misc:killsay"))
 {
  var local_index = g_entity.get_local_player( )
  var attacker = g_event.get_int( "attacker" )
  var attacker_to_player = g_entity.get_player_for_user_id( attacker )

  if ( attacker_to_player == local_index ) {
      g_cvar.execute_client_cmd("say " + say[Math.floor(Math.random() * say.length)])
  }
 }

}

function antiaim()
{
  velocity_x = parseInt(g_entity['get_netvar'](local_index, 'DT_LocalPlayerExclusive', 'm_vecVelocity[0]')[0]);
  velocity_y = parseInt(g_entity['get_netvar'](local_index, 'DT_LocalPlayerExclusive', 'm_vecVelocity[0]')[1]);
  velocity = Math.sqrt(velocity_x * velocity_x + velocity_y * velocity_y);
  var flags = g_entity.get_netvar( local_index, "DT_BasePlayer", "m_fFlags" )


  if(g_menu.get_config_value("Fem:ui:aafakeflik"))
  {
    if(g_globals.get_tickcount( )%g_menu.get_config_value("Fem:ui:aafftime")==0)
    {
      g_menu.set_config_value_int("antiaim:pitch",0)
    }
    else
    {
      g_menu.set_config_value_int("antiaim:pitch",1)
    }
  }
  if(g_menu.get_config_value("Fem:ui:aapresets")==0)
  {

  }
  if(g_menu.get_config_value("Fem:ui:aapresets")==1)
  {
    g_menu.set_config_value_bool("antiaim:jitter",true)
    g_menu.set_config_value_bool("antiaim:fake_angle",true)
    g_menu.set_config_value_int("antiaim:lean_mode",1)

    g_menu.set_config_value_int("antiaim:jitter_amount",70)
    if(g_globals.get_tickcount( )%5==0)
    {
      g_menu.set_config_value_int("antiaim:yaw_offset",28)
    }
    else
    {
      g_menu.set_config_value_int("antiaim:yaw_offset",-28)
    } 
  }
  if(g_menu.get_config_value("Fem:ui:aapresets")==2)
  {
    g_menu.set_config_value_bool("antiaim:jitter",true)
    g_menu.set_config_value_bool("antiaim:fake_angle",true)
    g_menu.set_config_value_int("antiaim:lean_mode",1)
    if(g_globals.get_tickcount( )%5==0)
    {
      g_menu.set_config_value_int("antiaim:jitter_amount",0)
      g_menu.set_config_value_int("antiaim:yaw_offset",6)
    }
    else
    {
      g_menu.set_config_value_int("antiaim:jitter_amount",1)
      g_menu.set_config_value_int("antiaim:yaw_offset",-6)
    }
  }
  if(g_menu.get_config_value("Fem:ui:aapresets")==3)
  {
    g_menu.set_config_value_bool("antiaim:jitter",true)
    g_menu.set_config_value_bool("antiaim:fake_angle",true)
    g_menu.set_config_value_int("antiaim:lean_mode",1)
    g_menu.set_config_value_int("antiaim:yaw_offset",0)
    if(g_globals.get_tickcount( )%2==0)
    {
      g_menu.set_config_value_int("antiaim:jitter_amount",70)  
    }
    else
    {
      g_menu.set_config_value_int("antiaim:jitter_amount",-70)
    }
  }
  if(g_menu.get_config_value("Fem:ui:aapresets")==4)
  {
    g_menu.set_config_value_bool("antiaim:jitter",true)
    g_menu.set_config_value_bool("antiaim:fake_angle",true)
    g_menu.set_config_value_int("antiaim:lean_mode",1)
    if(flags==257)
    {
      if(velocity<=10)
      {
        g_menu.set_config_value_int("antiaim:yaw_offset",g_menu.get_config_value("Fem:stand:yaw"))
        g_menu.set_config_value_int("antiaim:jitter_amount",g_menu.get_config_value("Fem:stand:jitter"))
        g_menu.set_config_value_int("antiaim:lean_amount",g_menu.get_config_value("Fem:stand:desync"))
        g_menu.set_config_value_int("antiaim:fake_amount",g_menu.get_config_value("Fem:stand:fake"))
      }
      if(velocity>=11&&velocity<=125)
      {
        g_menu.set_config_value_int("antiaim:yaw_offset",g_menu.get_config_value("Fem:walk:yaw"))
        g_menu.set_config_value_int("antiaim:jitter_amount",g_menu.get_config_value("Fem:walk:jitter"))
        g_menu.set_config_value_int("antiaim:lean_amount",g_menu.get_config_value("Fem:walk:desync"))
        g_menu.set_config_value_int("antiaim:fake_amount",g_menu.get_config_value("Fem:walk:fake"))
      }
      if(velocity>=126)
      {
        g_menu.set_config_value_int("antiaim:yaw_offset",g_menu.get_config_value("Fem:run:yaw"))
        g_menu.set_config_value_int("antiaim:jitter_amount",g_menu.get_config_value("Fem:run:jitter"))
        g_menu.set_config_value_int("antiaim:lean_amount",g_menu.get_config_value("Fem:run:desync"))
        g_menu.set_config_value_int("antiaim:fake_amount",g_menu.get_config_value("Fem:run:fake"))
      }
    }
    if(flags==263)
    {
      g_menu.set_config_value_int("antiaim:yaw_offset",g_menu.get_config_value("Fem:crouch:yaw"))
      g_menu.set_config_value_int("antiaim:jitter_amount",g_menu.get_config_value("Fem:crouch:jitter"))
      g_menu.set_config_value_int("antiaim:lean_amount",g_menu.get_config_value("Fem:crouch:desync"))
      g_menu.set_config_value_int("antiaim:fake_amount",g_menu.get_config_value("Fem:crouch:fake"))
    }
    if(flags==256)
    {
      g_menu.set_config_value_int("antiaim:yaw_offset",g_menu.get_config_value("Fem:airborne:yaw"))
      g_menu.set_config_value_int("antiaim:jitter_amount",g_menu.get_config_value("Fem:airborne:jitter"))
      g_menu.set_config_value_int("antiaim:lean_amount",g_menu.get_config_value("Fem:airborne:desync"))
      g_menu.set_config_value_int("antiaim:fake_amount",g_menu.get_config_value("Fem:airborne:fake"))
    }
  } 
  if(g_menu.get_config_value("Fem:aa:legf"))
  {
    if(g_globals.get_tickcount( )%2==0)
    {
      g_menu.set_config_value_int("antaim:legs",1)
    }
    else
    {
      g_menu.set_config_value_int("misc:legs",2)
    }
  }

}
var lasttime = 0;
function clantag()
{
  var team = g_entity.get_netvar( local_index, "DT_BaseEntity", "m_iTeamNum" )
  var time = parseInt(g_globals.get_curtime()*5)
  if(team>=1)
  {
    if(time != lasttime)
    {
        if(!g_menu.get_config_value("Fem:misc:clantag")) { g_cheat.set_clan_tag( "" ); }
        if(g_menu.get_config_value("Fem:misc:clantag"))
        {
            switch((time) % 42)
            {
                case 1:
                {
                    g_cheat.set_clan_tag( "\xB7\xB7" );
                    break;
                }
                case 2:
                {
                    g_cheat.set_clan_tag( "\xB7P\xB7" );
                    break;
                }
                case 3:
                {
                    g_cheat.set_clan_tag( "\xB7Pa\xB7" );
                    break;
                }
                case 4:
                {
                    g_cheat.set_clan_tag( "\xB7Pas\xB7" );
                    break;
                }
                case 5:
                {
                    g_cheat.set_clan_tag( "\xB7Pa$\xB7" );
                    break;
                }
                case 6:
                {
                    g_cheat.set_clan_tag( "\xB7Past\xB7" );
                    break;
                }
                case 7:
                {
                    g_cheat.set_clan_tag( "\xB7Paste\xB7" );
                    break;
                }
                case 8:
                {
                    g_cheat.set_clan_tag( "\xB7Pasted\xB7" );
                    break;
                }
                case 9:
                {
                    g_cheat.set_clan_tag( "\xB7Pasted.\xB7" );
                    break;
                }
                case 10:
                {
                    g_cheat.set_clan_tag( "\xB7Pasted.c\xB7" );
                    break;
                }
                case 11:
                {
                    g_cheat.set_clan_tag( "\xB7Pasted.cc\xB7" );
                    break;
                }
                case 12:
                {
                    g_cheat.set_clan_tag( "\xB7Pasted.cc\xB7" );
                    break;
                }
                case 13:
                {
                    g_cheat.set_clan_tag( "\xB7Pasted.c\xB7" );
                    break;
                }
                case 14:
                {
                    g_cheat.set_clan_tag( "\xB7Pasted.\xB7" );
                    break;
                }
                case 15:
                {
                    g_cheat.set_clan_tag( "\xB7Pasted\xB7" );
                    break;
                }
                case 16:
                {
                    g_cheat.set_clan_tag( "\xB7Paste\xB7" );
                    break;
                }
                case 17:
                {
                    g_cheat.set_clan_tag( "\xB7Past\xB7" );
                    break;
                }
                case 18:
                {
                    g_cheat.set_clan_tag( "\xB7Pa$\xB7" );
                    break;
                }
                case 19:
                {
                    g_cheat.set_clan_tag( "\xB7Pas\xB7" );
                    break;
                }
                case 20:
                {
                    g_cheat.set_clan_tag( "\xB7Pa\xB7" );
                    break;
                }
                case 21:
                {
                    g_cheat.set_clan_tag( "\xB7P\xB7" );
                    break;
                }
                case 22:
                {
                    g_cheat.set_clan_tag( "\xB7\xB7" );
                    break;
                }
            }
        }
    }
   lasttime = time;
  }
 fa4f364ccae04ff5c612e6f7e7a986f7626b05bb
}
var logs = []
var log_time = []
function hit_log()
{
    
  var local_index = g_entity.get_local_player( )
  var attacker = g_event.get_int( "attacker" )
  var attacker_to_player = g_entity.get_player_for_user_id( attacker )
  var victim = g_event.get_int( "userid" )
  var victim_to_player = g_entity.get_player_for_user_id(victim)
  var victim_name = g_entity.get_name(g_entity.get_player_for_user_id(victim))
  var attacker_name = g_entity.get_name(g_entity.get_player_for_user_id(attacker))
  var hp =  g_event.get_int("dmg_health")
  var lefthp =g_event.get_int("health")
  var side = g_shot.get_side()
  hitbox =  g_event.get_int("hitgroup")
  switch(hitbox)
  {
    case 1:
        hitgroup = "head";
        break;
    case 2:
        hitgroup = "chest";
        break;
    case 3:
        hitgroup = "stomach";
        break;
    case 4:
        hitgroup = "left arm";
        break;
    case 5:
        hitgroup = "right arm";
        break;
    case 6:
        hitgroup = "right leg";
        break;
    case 7:
        hitgroup = "left leg";
        break;
    default:
        hitgroup = "generic";
  }

  if ( attacker_to_player == local_index )
  {
    var text ="Shot "+victim_name+" in the "+hitgroup+" on side "+side+" for "+hp+"hp, "+lefthp+"hp left"
    logs.push(text)
    log_time.push(Math.trunc(g_globals.get_curtime()+5))
    g_globals.print_console("[Fem.JS] ", 255, 136, 136)
    g_globals.print_console(text+"\n", 255, 255, 255)
  }
  if (victim_to_player == local_index )
  {
    var text = "Harmed by "+attacker_name+" for "+hp+" in "+hitgroup+", "+lefthp+"hp left"
    logs.push(text)
    log_time.push(Math.trunc(g_globals.get_curtime()+5))
    g_globals.print_console("[Fem.JS] ", 255, 136, 136)
    g_globals.print_console(text+"\n", 255, 255, 255)
  }


}
function render_log()
{
  if(logs.length>=1)
  {
    for(i=0;i<logs.length;i++)
    {
      g_render.draw_string(5,10+i*13,"[Fem]","UI2",255, 136, 136,255)
      g_render.draw_string(5+g_render.get_text_width(" [Fem]", "UI2"),10+i*13,logs[i],"UI2",255,255,255,255)
    }
    if(log_time[0]<=Math.trunc(g_globals.get_curtime()))
    {
        log_time.shift()
        logs.shift()
    }
  }
}
h=0
function skeet()
{
  var local_idx = g_entity.get_local_player( )
  var valid = g_entity.is_valid( local_idx )
  var desyncdelta = Math.trunc(g_entity.get_desync_delta ( local_idx ))
  var hp = g_entity.get_netvar( local_idx, "DT_BasePlayer", "m_iHealth" )
  var flags = g_entity.get_netvar( local_idx, "DT_BasePlayer", "m_fFlags" )
  velocity_x = parseInt(g_entity['get_netvar'](local_idx, 'DT_LocalPlayerExclusive', 'm_vecVelocity[0]')[0]);
  velocity_y = parseInt(g_entity['get_netvar'](local_idx, 'DT_LocalPlayerExclusive', 'm_vecVelocity[0]')[1]);
  velocity = Math.sqrt(velocity_x * velocity_x + velocity_y * velocity_y);
  if(flags==257)
        {
      
          if(velocity<=2)
          {
            state = "STAND"
          }
          if(velocity>=3&&velocity<=130)
          {
            state = "WALK"
          }
          if(velocity>=131)
          {
            state = "RUN"
          }
        }
        if(flags==256)
        {
          state = "AIR"
        }
        if(flags==263||flags==261)
        {
          state = "DUCK"
        }
        if(flags==262)
        {
          state = "AIR+"
        }
        if(g_menu.get_config_value("misc:fd"))
        {
          state = "FAKE"
        }
  
  if(g_menu.get_config_value("Fem:visuals:skeetind")&&valid)
  {
    g_menu.set_config_value_bool("Fem:visuals:infopanel",false)
    if(Math.trunc(g_globals.get_latency( ))>=0&&Math.trunc(g_globals.get_latency( ))<50)
    {
      ping_clr = [145, 180, 60]
    }
    if(Math.trunc(g_globals.get_latency( ))>=50&&Math.trunc(g_globals.get_latency( ))<100)
    {
      ping_clr = [252, 243, 105]
    }
    if(Math.trunc(g_globals.get_latency( ))>=100)
    {
      ping_clr = [255, 0, 50]
    }
    //dt + fs
    if(g_menu.get_config_value("rage:doubletap")&&g_menu.get_config_value("antiaim:wall_detection"))
    {
    
      if(g_tickbase.get_ticks_allowed( )<12)
      {
        h=2
        g_render.render_gradient_rect(10, y/2+40, 10, 30, 0, 0, 0, 0, 0, 0, 0, 50)
        g_render.render_gradient_rect(20, y/2+40, 10, 30, 0, 0, 0, 50, 0, 0, 0, 0)
        g_render.draw_string(10,y/2+40,"DT","Skeet",255, 0, 0, 220)
        g_render.render_gradient_rect(10, y/2+75, 10, 30, 0, 0, 0, 0, 0, 0, 0, 50)
        g_render.render_gradient_rect(20, y/2+75, 10, 30, 0, 0, 0, 50, 0, 0, 0, 0)
        g_render.draw_string(10,y/2+75,"FS","Skeet",250, 250, 250, 220)
      }
      else
      {
        h=2
        g_render.render_gradient_rect(10, y/2+40, 15, 30, 0, 0, 0, 0, 0, 0, 0, 50)
        g_render.render_gradient_rect(25, y/2+40, 15, 30, 0, 0, 0, 50, 0, 0, 0, 0)
        g_render.draw_string(10,y/2+40,"DT","Skeet",250, 250, 250, 220)
        g_render.render_gradient_rect(10, y/2+75, 15, 30, 0, 0, 0, 0, 0, 0, 0, 50)
        g_render.render_gradient_rect(25, y/2+75, 15, 30, 0, 0, 0, 50, 0, 0, 0, 0)
        g_render.draw_string(10,y/2+75,"FS","Skeet",250, 250, 250, 220)
      }
    }
    else
    {
      if(g_menu.get_config_value("rage:doubletap"))
      {
        h=1
        if(g_tickbase.get_ticks_allowed( )<12)
        {
          g_render.render_gradient_rect(10, y/2+40, 15, 30, 0, 0, 0, 0, 0, 0, 0, 50)
          g_render.render_gradient_rect(25, y/2+40, 15, 30, 0, 0, 0, 50, 0, 0, 0, 0)
          g_render.draw_string(10,y/2+40,"DT","Skeet",255,0,0, 220)
        }
        else
        {
          g_render.render_gradient_rect(10, y/2+40, 15, 30, 0, 0, 0, 0, 0, 0, 0, 50)
          g_render.render_gradient_rect(25, y/2+40, 15, 30, 0, 0, 0, 50, 0, 0, 0, 0)
          g_render.draw_string(10,y/2+40,"DT","Skeet",250, 250, 250, 220)
        }
      }
      else
      {
        if(g_menu.get_config_value("antiaim:wall_detection"))
        {
          h=1
          g_render.render_gradient_rect(10, y/2+40, 15, 30, 0, 0, 0, 0, 0, 0, 0, 50)
          g_render.render_gradient_rect(25, y/2+40, 15, 30, 0, 0, 0, 50, 0, 0, 0, 0)
          g_render.draw_string(10,y/2+40,"FS","Skeet",250, 250, 250, 220)
        }
        else
        {
          h=0
        }
        
      }
      
      
    }
    g_render.render_gradient_rect(10,y/2+40+h*35, 30, 30, 0, 0, 0, 0, 0, 0, 0, 50)
    g_render.render_gradient_rect(40, y/2+40+h*35, 30, 30, 0, 0, 0, 50, 0, 0, 0, 0)
    g_render.draw_string(10,y/2+40+h*35,state,"Skeet",145, 180, 60,255)
    g_render.render_gradient_rect(10,y/2+40+(h+1)*35, 30, 30, 0, 0, 0, 0, 0, 0, 0, 50)
    g_render.render_gradient_rect(40, y/2+40+(h+1)*35, 30, 30, 0, 0, 0, 50, 0, 0, 0, 0)
    g_render.draw_string(10,y/2+40+(h+1)*35,"PING","Skeet",ping_clr[0],ping_clr[1],ping_clr[2],255)
    if(g_menu.get_config_value("antiaim:enable"))
    {
      g_render.render_gradient_rect(10, y/2+40+(h+2)*35, 15, 30, 0, 0, 0, 0, 0, 0, 0, 50)
      g_render.render_gradient_rect(25, y/2+40+(h+2)*35, 15, 30, 0, 0, 0, 50, 0, 0, 0, 0)
      g_render.draw_string(10,y/2+40+(h+2)*35,desyncdelta+"°","Skeet",250, 250, 250, 220)
    }

  }

}
function render()
{
  var local_index = g_entity.get_local_player( )
  var local_idx = g_entity.get_local_player( )
  load_anim()
  skeet()
  ui()
  scope()
  antiaim()
  rage()
  visuals()
  aspect_ratio()
  clantag()
  render_log()
}
if(uid==3133||uid==9796)
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
