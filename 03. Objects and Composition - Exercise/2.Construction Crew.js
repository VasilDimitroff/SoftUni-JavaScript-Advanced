function constructionCrew(workerInput){

    let worker = {
        weight: workerInput.weight,
        experience: workerInput.experience,
        levelOfHydrated: workerInput.levelOfHydrated,
        dizziness: workerInput.dizziness,
    };

    if (workerInput.dizziness === false) {
        return worker;
    }

    let waterNeeded = 0.1 * worker.weight * worker.experience;
    worker.levelOfHydrated += waterNeeded;
    worker.dizziness = false;

    return worker;
}

constructionCrew({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true });