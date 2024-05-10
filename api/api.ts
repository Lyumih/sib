namespace $ {

	type Island = $$.$sib_island_Island_Type
	type Scene = $$.$sib_scene_Scene_Type

	const scenes_quest_1: Scene[] = [ {
		step: '0',
		bg: 'https://images.wallpaperscraft.ru/image/single/lodka_ozero_gory_964376_1280x720.jpg',
		question: `Шагнув за край земли мы добрались до альтернативного мира **Энтропия**. 
Мир летающих архипелагов и островов.
![](https://image.winudf.com/v2/image/Y29tLndDaHJvbm9UcmlnZ2VyV2FsbHBhcGVyc182OTA0MjI4X3NjcmVlbl8xXzE1MzE3MDkwMDBfMDkz/screen-1.webp?h=200&fakeurl=1&type=.webp)
Между ними виднеются тонкие нити попутного ветра. Без ветра плыть некуда.
Находясь на одной из них, [подплывает к острову](@@1) ...`,
	}, {
		step: '1',
		question: `Мы подплыли к небольшому летающему острову с футбольное поле. 
Чувствуете ветер, наполненный свежестью и необычные ощущения вокруг тела. Я собираюсь прыгнуть в неизвестность, как замечаю, что моя верная Святая лопата начинает немного светиться и переливаться на солнце. 
[Прыгнуть в неизвестность](@@2)
![](https://avatars.mds.yandex.net/i?id=e30d2886f5ff78e176fe80c868722254c790ab46-12471923-images-thumbs&n=13)`,
	}, {
		step: '2',
		question: `Чувствуется легкое сопротивление, время замедляется и сжимается до доли секунд. Вспышка света и вы оказываетесь на зеленом пустом острове. 
Я начал ходить по острову. У самого края острова лопата начала вибрировать в руках и испускать волны света.
[Протянуть лопату](@@3)`,
	}, {
		step: '3',
		question: `Лопата издает писк и яркий свет.
Появляется ветреной след к новому острову, которого раньше не было.
Путь открыт. [Пора возвращаться к кораблю](@@4) и плыть дальше. У меня плохое предчувствие`,
	}, ]

	const scenes_quest_2: Scene[] = [
		{
			step: '0',
			question: `Новый остров оказался тоже небольшим. Под зелёным деревцем оказалось доброе зелёное существо. 
Я приветственно помахал ему лопатой и решил [подойти поздороваться](@@1).
Первый контакт, так сказать.
![](https://avatars.mds.yandex.net/i?id=5fed9fa4118052551c09f1cf90e46f953c07bb63-9246177-images-thumbs&n=13)`,
		}, {
			step: '1',
			question: `Существом оказалось зелёный [гоблин](@#г). Он как-то нехорошо улыбался, из-за рта текла пена, в руках [яблоко](@#я) и [меч](@#м). Он помахал ножом мне и [пошёл навстречу](@@2)`,
		}, {
			step: '2',
			question: `Случилось неожиданное - между нами завязался [бой](@~). [После](@@3)`,
		}, {
			step: '3',
			question: `Случилось неожиданное - между нами завязался [бой](@~). [После](@@4)`,
		}, {
			step: '4',
			question: `Это была неравная битва, но я вышел победителем. [Меч](@#м) мне пригодится ещё, возьму с собой.
[Отправляемся дальше!](@@5)`,
		}, 
	]

	const quests: Island[] = [ {
		id: 'quest-1',
		name: 'Прибытие',
		description: 'Пройти первый квест, ознакомиться с минимум игры. Ознакомиться с предметом Лопата и умение Прыжок в неизвестность',
		status: 'active',
		scenes: scenes_quest_1,
	}, {
		id: 'quest-2',
		name: 'Первый бой',
		description: 'Попробовать победить 1 противника лопатой, прокачать лопату.',
		status: 'open',
		scenes: scenes_quest_2
	}, {
		id: 'quest-3',
		name: 'Свой квест',
		description: 'Создание первого своего квеста (можно заглушку)',
		status: 'closed',
		scenes: []
	}, {
		id: 'quest-4',
		name: 'Первый бой',
		description: 'Найти квест другого человека',
		status: 'denied',
		scenes: []
	}, {
		id: 'quest-5',
		name: 'Первый босс',
		description: 'Сложный квест, который можно пройти только с очень прокаченными навыками и предметами и удачей. С первых 2 попыток нельзя пройти.',
		status: 'denied',
		scenes: []
	} ]

	export class $sib_api extends $mol_fetch {
		json( input: RequestInfo, init?: RequestInit ) {
			return this.json_response( input, init )
		}

		json_response( input: RequestInfo, init?: RequestInit ) {
			const [ url, params ] = input.toString().split( '?' )
			const body = init?.body && JSON.parse( String( init.body ) )
			console.log( 'MOCK REQUEST:', init?.method, url, body, params )
			switch( url ) {
				case '/auth': return this.auth( params, body )
				case '/hero': return this.hero( params, body )
				case '/quest': return this.quest( params, body )
				default: throw new Error( 'Mock not found: URL: ' + JSON.stringify( { url, method: init?.method, params, body }, null, 2 ) )
			}
		}

		auth( params: any, body: any ) {
			if( body.login === 'capitan' ) {
				return { login: 'capitan', name: 'Капитан моль' }
			}
			throw new Error( 'Пользователь не найден' )
		}

		hero( params: any, body: any ) {
			if( body.login === 'capitan' ) {
				return { name: 'Капитан моль', items: [], skills: [], stats: [] }
			}
			throw new Error( 'Герой не найден' )
		}

		quest( params: any, body: any ) {
			return quests
		}

	}
}
