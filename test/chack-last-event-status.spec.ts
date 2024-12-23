import ChackLastEventStatus from "../src/ChackLastEventStatus";
import LoadLastEventRepository from "../src/LoadLastEventRepository";

class LoadLastEventRepositoryMock implements LoadLastEventRepository{
    groupId?: string;
    output: undefined;

    async loadlastEvent(groupId: string): Promise<undefined> {
        this.groupId = groupId;
        return this.output;
    }
}

type SutOutput = { sut: ChackLastEventStatus, loadLastEventRepository: LoadLastEventRepositoryMock };

const makeSut = (): SutOutput => {
    const loadLastEventRepository = new LoadLastEventRepositoryMock();
    const sut = new ChackLastEventStatus(loadLastEventRepository);
    return {sut, loadLastEventRepository};
}


describe('ChackLastEventStatus', () => {
    it('should get last event data', async () => {
        const {sut, loadLastEventRepository} = makeSut();

        await sut.perform('any_grup_id');

        expect(loadLastEventRepository.groupId).toBe('any_grup_id');
    });

    it('should return status done when group has no event', async () => {

        const {sut, loadLastEventRepository} = makeSut();

        loadLastEventRepository.output = undefined;

        const status = await sut.perform('any_grup_id');

        expect(status).toBe('done');
    });
});

