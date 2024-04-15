# theme: dark
#author: Riana Sukhu
#IMAGE: Jumanji.jpg
There is only one way out of the Jungle and every move you make spells life or death for you and your teammates. Survive through Jumanji! The choices and options will be loosely based on the movies. There are only 2 possible endings; you die or you make it to safety.
*[Start Game]->A

==A==
Your team has been stranded in the Jungle. It’s dangerous out here. You must get to safety.
    +[We should stay put and wait for help; someone should be looking for us.]
    Your team sets up camp and waits for days. Your group slowly succumbs to jungle fever. ->No1
    +[We need to move; waiting wastes time. Salvation isn’t going to walk up to us.] Your team comes across a beat-up path, maybe this could lead you to safety.->B
==B==
There is a river to your left and continuous jungle to your right which way do you go?
    +[Go left, following the river could lead to a way out of the jungle.]->Ex
    +[Go right, we are already in danger. Maybe salvation is only a few trees ahead.] You walk deeper into the Jungle and find an abandoned camp. The campfire is still warm. Hope is not lost. ->C
    //Exposition: Introduce All the cast members. Lead the plot points with discussions? Scripted y/n quoting? Talk before plot points and after before choices to allow player team analysis. For try agains make separate knots that allow single divert backs instead of the beginning. Establish the unprofessionalism of the group. 
==Ex==
Following the river, you come across a dead end.
+[We can just circle back and find an easier way across]->Ex1
+[We have no choice but to cross over to the other side.]->Ex2
==Ex1
Your team heads back and happens upon a different path. It looks fairly used, it could lead to a way out. You walk deeper into the Jungle and find an abandoned camp. The campfire is still warm.->Exx
==Ex2
The river seems pretty deep, going across won't be easy but it's got to be the fastest way out. Right?->Exx
==Exx==
{Ex1: Hope is not lost. ->No|  Your team enters the river and begins to wade across.  Nearby a family of Hippos rests. Feeling threatened by your company they attack and drown your team in the river's embrace.->No2}
==No
+[Next]->C
==C==
//shuffle alternatives to be used for weapons and supplies provided by the campsite. Thus needing to add alternatives to dealing with the storm and monkeys.
At the campsite you find supplies including {~ a flare gun.->C2| a hunting rifle.->C2| extra tents.->C3| warm clothes.->C3} 
==C2
As you finish looking through the tents the weather changes. The wind blows harshly and the sky smells of rain. A monsoon is beginning.->C4
==C3
As you finish looking through the tents the weather changes. The wind blows harshly and the sky smells of rain. A monsoon is beginning.->C4
==C4
//Even with C3 items death by monsoon is unavoidable without the professionally set up campsite.
    +[The wind is blowing fast, and the storm is practically above us. Let’s wait it out here where it’s safe .]
    The storm is merciless. You hear the wind knocking over trees and throwing around anything not tied to the ground. As the night passes it calms and your team greets a bright morning.->D
    +[{C3: We gathered enough supplies to make it through the night.} Let’s keep moving and find shelter elsewhere. We're exposed either way.]
    The storm catches up with you. It blows mercilessly knocking over trees and throwing your team around. The injuries were fatal.->No3
==D==
    //Now the only way to die by a monkey is if you fight them without C2 items.
    As you continue to follow the path a rustle of the trees catches your attention. A family of Baboons has found you in their territory and they do not like it.
    +[RUN! Those monkeys are crazy and dealing with them is deadly.]
    The panic causes you all to split. As you run from the monkeys, leaving their territory, they quit chasing you down.->E
    +[FIGHT! They’re just a couple of monkeys. We can outwit them and lead them away from us.]
    Your group splits into two. One distracts the monkeys while the others trackback around them to scare those baboons {C2: off with the gun.->E |off. ->iE}
==iE
The distracting group ends up scattering throughout the jungle. The baboons pick you off one by one. These monkeys were too much for you all to handle.->No4
==E==
Your team decided to regroup at the campsite as it is the only safe place you guys could remember. Your team is whole again and the relief is great, and you are tired from fending off those wild animals. 
    +[Let’s just stay here and celebrate our success at overcoming nature. We deserve a break. Another night in a nice warm bed sounds good.]
    Your team celebrates and laughs by the fire through the night. You all fall asleep with smiles on your faces and rested minds.->1eF
    +[We can rest here, catch our breath, but staying in one place isn’t going to get us out of the jungle. We must keep moving.]
    Your team moves on from the comfort of the campsite and continues the path you had been on. The journey weighs heavy on your shoulders as you trek further into the jungle.->F
    //use these knots for conditionals. split story between whether they come across the hunters or not. provide an alternative for "F" and so on based on that.
==1eF==
When your team rises the sun is high in the sky. As you all gather you hear gunshots nearby. Hunters seem to be gathering nearby.
    +[We should leave quickly. People, especially hunters, are unpredictable and crossing paths with them is risky.]->1eFi
    +[People! Hunters are people who know the jungle. If we go to them for help, we can get out of the jungle today.]
    Your team walks in the direction of the gunshots and is met with the huntsmen. The men agree to guide you out of the jungle. They take you through the jungle until the moon rises and fatigue forces you to stop for the night. You are startled awake by gunshots. The huntsmen are killing your team and taking your stuff. They had tricked you all.->No5
==1eFi
    Your team quietly leaves the campsite following the path from a safe distance. When you look back you see the hunters found the campsite and are investigating the scene. They leave as quickly as they came in the opposite direction of your group following some tracks nearby.
    +[Continue]->F
==F==
//Now the only way to die by a hunter is if you saw 1eFi.
The weather is hot; you haven’t stopped for a break in a long time and the air is thick with jungle moisture. Some of your teammates have become irritable and a fight breaks out. Some of them want to go back to the camp {1eFi: and find the hunters} while the rest believe we just need to keep moving.
    +[Let’s just split up, staying together will only continue the conflict and not everyone will be happy.]->Split
    +[Going back does seem pointless but continuing through unknown jungle is equally just as bad. {1eFi: We should go back and get help from someone familiar with this place. |The camp was so comfortable and we could survive there for a long time.}]
 {1eFi: Your team walks in the direction of the camp and is met with the huntsmen. The men agree to guide you out of the jungle. They take you through the jungle until the moon rises and fatigue forces you to stop for the night. You are startled awake by gunshots. The huntsmen are killing your team and taking your stuff. They had tricked you all. | Your team sets up camp and waits for days. Your group slowly succumbs to jungle fever.}->No6
    +[We need to keep moving forward. Our team has made so much progress and going back will only set us back. We don’t know what the hunters are capable of or if they’re still in the area. Let’s just rest a bit and continue the path.]
     Before your team rests for a bit you collect more food and water. With bellies full and thirst quenched you head off again to quietly continue the path. It is still hot and humid but a least you are contented.->G
==Split
//If you choose to go back or If you've seen 1eFi you lose.
    You split and go your separate ways:
    +[Your group goes back to camp.]
   {1eFi: Your team walks in the direction of the camp and is met with the huntsmen. The men agree to guide you out of the jungle. They take you through the jungle until the moon rises and fatigue forces you to stop for the night. You are startled awake by gunshots. The huntsmen are killing your team and taking your stuff. They had tricked you all. | Your team sets up camp and waits for days. Your group slowly succumbs to jungle fever. }->No6
    +[Your group continues the path.]
    {1eFi: As the day passes you come across the still bodies of the other half of your team. Stricken with grief your group no longer has the will to move on. After sending off your lost friends you all recklessly think of revenge. Although you made a good plan and your team followed it well the huntsmen still overpower you. There was no hope.->No6 |->G} 
==G==
The path is starting to look more developed. The trees are starting to thin out. Could it be that we are nearing the end of the wild and reaching civilization?
    +[There’s no way, we’ve been walking for days. There wasn’t any sign of people aside from the camp and huntsman. We shouldn’t get our hopes up. All we need to do is keep moving.]->Yes
    +[This is it! We finally made it. Just a few more miles we’ll be out. All we need to do is keep moving. Salvation is only a few steps ahead.]->Yes
==Yes
//If you split up the ending sounds more negative.
You continue the path. The path becomes a dirt road. The trees no longer loom over you’re your heads. You look ahead and see in the distance a village past the horizon. This is it! You’ve made it out. {Split: If only you all had stayed together, you all would've made it out.} The past few days seem like a nightmare, but you no longer have to worry about what lurks around the corner. With help from the people of the village {Split: the rest of you find a way home. | you all find a way home.} 
{Split:Congratulations almost all of you have survived through the wild jungle. |Congratulations you have survived through the wild jungle.}  ->END
==No1
#IMAGE: Died.jpg
 +[Try again]->A
==No2
#IMAGE: Died.jpg
 +[Try again]->Ex
==No3
#IMAGE: Died.jpg
 +[Try again]->C
==No4
#IMAGE: Died.jpg
 +[Try again]->D
==No5
#IMAGE: Died.jpg
 +[Try again]->1eF
==No6
#IMAGE: Died.jpg
+[Try again from the beginning.]
#RESTART
    -> END