How to use thumbs scroller....

for add thumbs use tag below, all atributes are optional

<thumbnails name="NAME" 
	verticla="false"
	size="750" 
	edge="lefttop" 
	align="lefttop" 
	y="1" 
	x="1" 
	scale="1" 
	alpha="1"
	thumb_width="" 
	thumb_height="" 
	thumb_margin=""
	frame_width="" 
	frame_height=""
	bar_position=""
	bg_url="" 
	bg_alpha=""
	barbg_url="" 
	barbg_alpha=""
	skin_url="%CURRENTXML%/thumbsxml/skin/"
	thumb_url="%CURRENTXML%/thumbs/"
	folow_mouse="false"
	wheel_speed="3" 
	current_auto="true"
	current_jump="true"
	visited_auto="true"
	scroll_speed="0.5"
>

   <thumb name="tn1" url="image1.jpg" onclick="" onhover="" onover="" onout="" ondown="" onup="" />
   <thumb name="tn2" url="image2.jpg" onclick="" onhover="" onover="" onout="" ondown="" onup="" />
   <thumb name="tn3" url="image3.jpg" onclick="" onhover="" onover="" onout="" ondown="" onup="" />

</thumbnails>

Description:

size - width/height of thumbs area (note: mask effect not work on idevices) (default: equal stagewidth)
thumb_width - thumb width in pixels (default: 100)
thumb_height - thumb height in pixels (default: 65)
thumb_margin - thumb margin in pixels (default: 5)
frame_width - thumbframe width in pixels (default: thumb_width)
frame_height - thumbframe height in pixels (default: thumb_height)
bar_position - position of thumbs bar 0-0%, 1-100% (default: 0)
bg_url - background image url (default: spacer.png) image file must be in skin folder
bg_alpha - background image alpha (default: 1)
barbg_url - thumbsbar background image url (default: spacer.png) image file must be in skin folder
barbg_alpha - thumbsbar background image alpha (default: 1)
skin_url - url if skin folder (default: %CURRENTXML%/thumbsxml/skin/)
thumb_url - url of thumbs images folder (default: %CURRENTXML%/thumbs/ )
folow_mouse - folowmouse effect true/false (default: true)
wheel_speed - max wheel steps (default: 3)
current_auto - onclick automark as current (default: true)
current_jump - jump and to current thumb if hidden (default: true)
visited_auto - onclick automark as visited (default: true)
scroll_speed - thumbs scrollspeed great then 0 (0.1 fast,  2 - slow) recomendet values from 0.2 to 1.5

Thumbs actions preset:

thumbnails_build(thumbsname); - build thumbs with name (you can build more then one thumbsbar)
thumbsname - thumbsbar name, string

thumbnails_visited(thumbsname, thumbindex, flag); - set thumb with thumbindex to visited
thumbsname - thumbsbar name, string
thumbindex - thumb index (start from 0)
flag - true/false

thumbnails_current(thumbsname, thumbindex); - set thumb with thumbindex to current
thumbsname - thumbsbar name, string
thumbindex - thumb index (start from 0)

thumbnails_movebegin(thumbsname); - start thumbsbar scroll to begin 
thumbnails_moveend(thumbsname); - start thumbsbar scroll to end 

thumbnails_movestop(thumbsname); - stop thumbsbar scroll

thumbnails_moveat(thumbsname, scrollposition); - jump to scrollposition percentage (values 0-1) 1-100%

thumbnails_moveto(thumbsname, scrollposition); - move to scrollposition percentage (values 0-1) 1-100%





