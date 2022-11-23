function simpleState<T>(initial: T): [() => T, (v: T) => void] {
    let val: T = initial;
    return [
        () => val,
        (v: T) => {
            val = v;
        }
    ]
}
const [str1getter, str1setter] = simpleState('10');
console.log(str1getter());
str1setter('20');
console.log(str1getter());

const [getter2, setter2] = simpleState<string | null>(null);
console.log(getter2());
setter2('str');
console.log(getter2());

interface Rank<RankItem> {
    item: RankItem;
    rank: number;
}
const ranker = <RankItem>(
    items: RankItem[],
    rank: (v: RankItem) => number
): RankItem[] => {
    const ranks: Rank<RankItem>[] = items.map(item => ({
        item,
        rank: rank(item)
    }));
    ranks.sort((a, b) => a.rank - b.rank);
    return ranks.map(rank => rank.item);
};

interface Pokemon {
    name: string;
    hp: number;
}

const pokemon: Pokemon[] = [
    {
        name: 'Bulbasaur',
        hp: 20
    },
    {
        name: 'Megasaur',
        hp: 5
    }
];

const ranks = ranker(pokemon, p => p.hp);
console.log(ranks);