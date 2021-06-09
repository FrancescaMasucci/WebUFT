AIUtil.SetContext Browser("creationtime:=0")
Browser("creationtime:=0").Maximize
wait (10)
AIUtil("profile").Click
AIUtil("input", "Username").Type "Mercury"
AIUtil("input", "Pa ssword").Click
AIUtil("input", "Pa ssword").Type "Mercury"
AIUtil.FindTextBlock("SIGN IN").Click

