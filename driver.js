var chocolateChip = new Cookie ("chocolate chip",  6);
var pasteball = new Cookie ("ball of paste",  4);
var snickerdoodle = new Cookie ("snickerdoodle",  5);

Oven.init();

Oven.addTrayOfCookies(chocolateChip);
Oven.addTrayOfCookies(pasteball);
Oven.addTrayOfCookies(snickerdoodle);

for(var i = 0; i < 10; i++)
{
  Oven.bakeOneMinute();
}
