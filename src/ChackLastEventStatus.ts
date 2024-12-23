import LoadLastEventRepository from "./LoadLastEventRepository";

export default class ChackLastEventStatus{

    constructor(private readonly loadLastEventRepository: LoadLastEventRepository){}

    async perform(grupId: string): Promise<void> {
        await this.loadLastEventRepository.loadlastEvent(grupId);
    };
}