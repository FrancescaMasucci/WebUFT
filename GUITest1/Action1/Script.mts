AIUtil.SetContext Browser("creationtime:=0")
Browser("creationtime:=0").Maximize
wait (10)
AIUtil("profile").Click
AIUtil("input", "Username").Type "Mercury"
AIUtil("input", "Pa ssword").Click
AIUtil("input", "Pa ssword").Type "Mercury"
AIUtil.FindTextBlock("SIGN IN").Click
AIUtil.FindTextBlock("SPEAKERS").Click




AIUtil.FindTextBlock("Bose Sou ndI ink Bluetooth").Click
AIUtil("button", "ADD TO CART").Click
AIUtil("shopping_cart").Click
AIUtil("close").Click
'AIUtil.FindTextBlock("EDIT I REMOVE").Click

AIUtil("profile").Click


AIUtil.FindTextBlock("Sign out").Click
