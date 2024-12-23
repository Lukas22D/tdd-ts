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


describe('ChackLastEventStatus', () => {
    it('should get last event data', async () => {
        const loadLastEventRepository = new LoadLastEventRepositoryMock();
        const sut = new ChackLastEventStatus(loadLastEventRepository);

        await sut.perform('any_grup_id');

        expect(loadLastEventRepository.groupId).toBe('any_grup_id');
    });

    it('should return status done when group has no event', async () => {
        const loadLastEventRepository = new LoadLastEventRepositoryMock();
        loadLastEventRepository.output = undefined;
        const sut = new ChackLastEventStatus(loadLastEventRepository);

        const status = await sut.perform('any_grup_id');

        expect(status).toBe('done');
    });
});

