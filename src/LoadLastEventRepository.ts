export default interface LoadLastEventRepository {
    
    loadlastEvent: (groupId: string) => Promise<void>;
}