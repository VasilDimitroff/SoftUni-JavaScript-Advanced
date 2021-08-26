function heroicInventory(data) {

    let heroes = [];

    for (let index = 0; index < data.length; index++) {
        let heroInfo = data[index];

        let heroProps = heroInfo.split(' / ');

        let hero = {};

        if (heroProps[0]) {
            hero.name = heroProps[0];
        }

        if (heroProps[1]) {
           hero.level = Number(heroProps[1]);
        }
        
        hero.items = [];

        if (heroProps[2]) {

            let itemsInfo = heroProps[2].split(', ');

            for (let j = 0; j < itemsInfo.length; j++) {
                let currentItem = itemsInfo[j];

                hero.items.push(currentItem);
            }
        }

        heroes.push(hero);
    }

    console.log(JSON.stringify(heroes));
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);