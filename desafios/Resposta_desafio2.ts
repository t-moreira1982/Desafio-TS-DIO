enum Job {
    Atriz,
    Padeiro
}

type Human  = {
   name: string,
   age: number,
   profession: Job
}

let people1: Human = {
    name: 'Maria',
    age: 29,
    profession: Job.Atriz
}

let people2: Human = {
    name: 'Roberto',
    age: 19,
    profession: Job.Padeiro
}

let people3: Human = {
    name: 'Laura',
    age: 32,
    profession: Job.Atriz
}

let people4: Human = {
    name: 'Carlos',
    age: 19,
    profession: Job.Padeiro
}