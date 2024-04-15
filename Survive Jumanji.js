var storyContent = ﻿{"inkVersion":18,"root":[[{"#":"theme: dark"},{"#":"author: Riana Sukhu"},{"#":"IMAGE: Jumanji.jpg"},"^There is only one way out of the Jungle and every move you make spells life or death for you and your teammates. Survive through Jumanji! The choices and options will be loosely based on the movies. There are only 2 possible endings; you die or you make it to safety.","\n","ev","str","^Start Game","/str","/ev",{"*":"0.c-0","flg":20},{"c-0":[{"->":"A"},"\n",{"->":"0.g-0"},{"#f":7}],"g-0":["done",{"#f":7}]}],"done",{"A":[["^Your team has been stranded in the Jungle. It’s dangerous out here. You must get to safety.","\n","ev","str","^We should stay put and wait for help; someone should be looking for us.","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^We need to move; waiting wastes time. Salvation isn’t going to walk up to us.","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n","^Your team sets up camp and waits for days. Your group slowly succumbs to jungle fever. ",{"->":"No1"},"\n",{"#f":7}],"c-1":["^ Your team comes across a beat-up path, maybe this could lead you to safety.",{"->":"B"},"\n",{"#f":7}]}],{"#f":3}],"B":[["^There is a river to your left and continuous jungle to your right which way do you go?","\n","ev","str","^Go left, following the river could lead to a way out of the jungle.","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Go right, we are already in danger. Maybe salvation is only a few trees ahead.","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":[{"->":"Ex"},"\n",{"#f":7}],"c-1":["^ You walk deeper into the Jungle and find an abandoned camp. The campfire is still warm. Hope is not lost. ",{"->":"C"},"\n",{"#f":7}]}],{"#f":3}],"Ex":[["^Following the river, you come across a dead end.","\n","ev","str","^We can just circle back and find an easier way across","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^We have no choice but to cross over to the other side.","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":[{"->":"Ex1"},"\n",{"#f":7}],"c-1":[{"->":"Ex2"},"\n",{"#f":7}]}],{"#f":3}],"Ex1":["^Your team heads back and happens upon a different path. It looks fairly used, it could lead to a way out. You walk deeper into the Jungle and find an abandoned camp. The campfire is still warm. ",{"->":"Exx"},"\n",{"#f":3}],"Ex2":["^The river seems pretty deep, going across won't be easy but it's got to be the fastest way out. Right? ",{"->":"Exx"},"\n",{"#f":3}],"Exx":["ev",{"CNT?":"Ex1"},"/ev",[{"->":".^.b","c":true},{"b":["^ Hope is not lost. ",{"->":"No"},{"->":"Exx.5"},null]}],[{"->":".^.b"},{"b":["^  Your team enters the river and begins to wade across.  Nearby a family of Hippos rests. Feeling threatened by your company they attack and drown your team in the river's embrace. ",{"->":"No2"},{"->":"Exx.5"},null]}],"nop","\n",{"#f":3}],"No":[["ev","str","^Next","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":[{"->":"C"},"\n",{"#f":7}]}],{"#f":3}],"C":["^At the campsite you find supplies including ",["ev","visit",4,"seq","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"ev","du",3,"==","/ev",{"->":".^.s3","c":true},"nop",{"s0":["pop","^ a flare gun. ",{"->":"C2"},{"->":"C.1.29"},null],"s1":["pop","^ a hunting rifle. ",{"->":"C2"},{"->":"C.1.29"},null],"s2":["pop","^ extra tents. ",{"->":"C3"},{"->":"C.1.29"},null],"s3":["pop","^ warm clothes. ",{"->":"C3"},{"->":"C.1.29"},null],"#f":5}],"^","\n",{"#f":3}],"C2":["^As you finish looking through the tents the weather changes. The wind blows harshly and the sky smells of rain. A monsoon is beginning. ",{"->":"C4"},"\n",{"#f":3}],"C3":["^As you finish looking through the tents the weather changes. The wind blows harshly and the sky smells of rain. A monsoon is beginning. ",{"->":"C4"},"\n",{"#f":3}],"C4":[["ev","str","^The wind is blowing fast, and the storm is practically above us. Let’s wait it out here where it’s safe .","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","ev",{"CNT?":"C3"},"/ev",[{"->":".^.b","c":true},{"b":["^ We gathered enough supplies to make it through the night.",{"->":"C4.0.12"},null]}],"nop","^ Let’s keep moving and find shelter elsewhere. We're exposed either way.","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n","^The storm is merciless. You hear the wind knocking over trees and throwing around anything not tied to the ground. As the night passes it calms and your team greets a bright morning. ",{"->":"D"},"\n",{"#f":7}],"c-1":["\n","^The storm catches up with you. It blows mercilessly knocking over trees and throwing your team around. The injuries were fatal. ",{"->":"No3"},"\n",{"#f":7}]}],{"#f":3}],"D":[["^As you continue to follow the path a rustle of the trees catches your attention. A family of Baboons has found you in their territory and they do not like it.","\n","ev","str","^RUN! Those monkeys are crazy and dealing with them is deadly.","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^FIGHT! They’re just a couple of monkeys. We can outwit them and lead them away from us.","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n","^The panic causes you all to split. As you run from the monkeys, leaving their territory, they quit chasing you down. ",{"->":"E"},"\n",{"#f":7}],"c-1":["\n","^Your group splits into two. One distracts the monkeys while the others trackback around them to scare those baboons ","ev",{"CNT?":"C2"},"/ev",[{"->":".^.b","c":true},{"b":["^ off with the gun. ",{"->":"E"},{"->":".^.^.^.7"},null]}],[{"->":".^.b"},{"b":["^off. ",{"->":"iE"},{"->":".^.^.^.7"},null]}],"nop","\n",{"#f":7}]}],{"#f":3}],"iE":["^The distracting group ends up scattering throughout the jungle. The baboons pick you off one by one. These monkeys were too much for you all to handle. ",{"->":"No4"},"\n",{"#f":3}],"E":[["^Your team decided to regroup at the campsite as it is the only safe place you guys could remember. Your team is whole again and the relief is great, and you are tired from fending off those wild animals.","\n","ev","str","^Let’s just stay here and celebrate our success at overcoming nature. We deserve a break. Another night in a nice warm bed sounds good.","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^We can rest here, catch our breath, but staying in one place isn’t going to get us out of the jungle. We must keep moving.","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n","^Your team celebrates and laughs by the fire through the night. You all fall asleep with smiles on your faces and rested minds. ",{"->":"1eF"},"\n",{"#f":7}],"c-1":["\n","^Your team moves on from the comfort of the campsite and continues the path you had been on. The journey weighs heavy on your shoulders as you trek further into the jungle. ",{"->":"F"},"\n",{"#f":7}]}],{"#f":3}],"1eF":[["^When your team rises the sun is high in the sky. As you all gather you hear gunshots nearby. Hunters seem to be gathering nearby.","\n","ev","str","^We should leave quickly. People, especially hunters, are unpredictable and crossing paths with them is risky.","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^People! Hunters are people who know the jungle. If we go to them for help, we can get out of the jungle today.","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":[{"->":"1eFi"},"\n",{"#f":7}],"c-1":["\n","^Your team walks in the direction of the gunshots and is met with the huntsmen. The men agree to guide you out of the jungle. They take you through the jungle until the moon rises and fatigue forces you to stop for the night. You are startled awake by gunshots. The huntsmen are killing your team and taking your stuff. They had tricked you all. ",{"->":"No5"},"\n",{"#f":7}]}],{"#f":3}],"1eFi":[["^Your team quietly leaves the campsite following the path from a safe distance. When you look back you see the hunters found the campsite and are investigating the scene. They leave as quickly as they came in the opposite direction of your group following some tracks nearby.","\n","ev","str","^Continue","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":[{"->":"F"},"\n",{"#f":7}]}],{"#f":3}],"F":[["^The weather is hot; you haven’t stopped for a break in a long time and the air is thick with jungle moisture. Some of your teammates have become irritable and a fight breaks out. Some of them want to go back to the camp ","ev",{"CNT?":"1eFi"},"/ev",[{"->":".^.b","c":true},{"b":["^ and find the hunters",{"->":"F.0.5"},null]}],"nop","^ while the rest believe we just need to keep moving.","\n","ev","str","^Let’s just split up, staying together will only continue the conflict and not everyone will be happy.","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Going back does seem pointless but continuing through unknown jungle is equally just as bad. ","ev",{"CNT?":"1eFi"},"/ev",[{"->":".^.b","c":true},{"b":["^ We should go back and get help from someone familiar with this place. ",{"->":"F.0.22"},null]}],[{"->":".^.b"},{"b":["^The camp was so comfortable and we could survive there for a long time.",{"->":"F.0.22"},null]}],"nop","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^We need to keep moving forward. Our team has made so much progress and going back will only set us back. We don’t know what the hunters are capable of or if they’re still in the area. Let’s just rest a bit and continue the path.","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":[{"->":"Split"},"\n",{"#f":7}],"c-1":["\n","ev",{"CNT?":"1eFi"},"/ev",[{"->":".^.b","c":true},{"b":["^ Your team walks in the direction of the camp and is met with the huntsmen. The men agree to guide you out of the jungle. They take you through the jungle until the moon rises and fatigue forces you to stop for the night. You are startled awake by gunshots. The huntsmen are killing your team and taking your stuff. They had tricked you all. ",{"->":".^.^.^.6"},null]}],[{"->":".^.b"},{"b":["^ Your team sets up camp and waits for days. Your group slowly succumbs to jungle fever.",{"->":".^.^.^.6"},null]}],"nop",{"->":"No6"},"\n",{"#f":7}],"c-2":["\n","^Before your team rests for a bit you collect more food and water. With bellies full and thirst quenched you head off again to quietly continue the path. It is still hot and humid but a least you are contented. ",{"->":"G"},"\n",{"#f":7}]}],{"#f":3}],"Split":[["^You split and go your separate ways:","\n","ev","str","^Your group goes back to camp.","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Your group continues the path.","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n","ev",{"CNT?":"1eFi"},"/ev",[{"->":".^.b","c":true},{"b":["^ Your team walks in the direction of the camp and is met with the huntsmen. The men agree to guide you out of the jungle. They take you through the jungle until the moon rises and fatigue forces you to stop for the night. You are startled awake by gunshots. The huntsmen are killing your team and taking your stuff. They had tricked you all. ",{"->":".^.^.^.6"},null]}],[{"->":".^.b"},{"b":["^ Your team sets up camp and waits for days. Your group slowly succumbs to jungle fever. ",{"->":".^.^.^.6"},null]}],"nop",{"->":"No6"},"\n",{"#f":7}],"c-1":["\n","ev",{"CNT?":"1eFi"},"/ev",[{"->":".^.b","c":true},{"b":["^ As the day passes you come across the still bodies of the other half of your team. Stricken with grief your group no longer has the will to move on. After sending off your lost friends you all recklessly think of revenge. Although you made a good plan and your team followed it well the huntsmen still overpower you. There was no hope. ",{"->":"No6"},{"->":".^.^.^.6"},null]}],[{"->":".^.b"},{"b":[{"->":"G"},{"->":".^.^.^.6"},null]}],"nop","^","\n",{"#f":7}]}],{"#f":3}],"G":[["^The path is starting to look more developed. The trees are starting to thin out. Could it be that we are nearing the end of the wild and reaching civilization?","\n","ev","str","^There’s no way, we’ve been walking for days. There wasn’t any sign of people aside from the camp and huntsman. We shouldn’t get our hopes up. All we need to do is keep moving.","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^This is it! We finally made it. Just a few more miles we’ll be out. All we need to do is keep moving. Salvation is only a few steps ahead.","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":[{"->":"Yes"},"\n",{"#f":7}],"c-1":[{"->":"Yes"},"\n",{"#f":7}]}],{"#f":3}],"Yes":["^You continue the path. The path becomes a dirt road. The trees no longer loom over you’re your heads. You look ahead and see in the distance a village past the horizon. This is it! You’ve made it out. ","ev",{"CNT?":"Split"},"/ev",[{"->":".^.b","c":true},{"b":["^ If only you all had stayed together, you all would've made it out.",{"->":"Yes.5"},null]}],"nop","^ The past few days seem like a nightmare, but you no longer have to worry about what lurks around the corner. With help from the people of the village ","ev",{"CNT?":"Split"},"/ev",[{"->":".^.b","c":true},{"b":["^ the rest of you find a way home. ",{"->":"Yes.12"},null]}],[{"->":".^.b"},{"b":["^ you all find a way home.",{"->":"Yes.12"},null]}],"nop","^","\n","ev",{"CNT?":"Split"},"/ev",[{"->":".^.b","c":true},{"b":["^Congratulations almost all of you have survived through the wild jungle. ",{"->":"Yes.20"},null]}],[{"->":".^.b"},{"b":["^Congratulations you have survived through the wild jungle.",{"->":"Yes.20"},null]}],"nop","^ ","end","\n",{"#f":3}],"No1":[[{"#":"IMAGE: Died.jpg"},"ev","str","^Try again","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":[{"->":"A"},"\n",{"#f":7}]}],{"#f":3}],"No2":[[{"#":"IMAGE: Died.jpg"},"ev","str","^Try again","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":[{"->":"Ex"},"\n",{"#f":7}]}],{"#f":3}],"No3":[[{"#":"IMAGE: Died.jpg"},"ev","str","^Try again","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":[{"->":"C"},"\n",{"#f":7}]}],{"#f":3}],"No4":[[{"#":"IMAGE: Died.jpg"},"ev","str","^Try again","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":[{"->":"D"},"\n",{"#f":7}]}],{"#f":3}],"No5":[[{"#":"IMAGE: Died.jpg"},"ev","str","^Try again","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":[{"->":"1eF"},"\n",{"#f":7}]}],{"#f":3}],"No6":[[{"#":"IMAGE: Died.jpg"},"ev","str","^Try again from the beginning.","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n",{"#":"RESTART"},"end",{"#f":7}]}],{"#f":3}],"#f":3}],"listDefs":{}};