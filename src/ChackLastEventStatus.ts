import LoadLastEventRepository from "./LoadLastEventRepository";

export default class ChackLastEventStatus{

    constructor(private readonly loadLastEventRepository: LoadLastEventRepository){}

    async perform(grupId: string): Promise<string> {
        await this.loadLastEventRepository.loadlastEvent(grupId);
        return 'done';
    };
}