import clone from "@/lib/clone";

const localStorageKeyName = 'recordList';

const recordStore = {
    recordList: [] as RecordItem[],
    fetchRecords() {
        this.recordList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
        return this.recordList;
    },
    saveRecord() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.recordList));
    },
    createRecord(record: RecordItem) {
        const record2: RecordItem = clone(record);
        record2.createAt = new Date();
        this.recordList?.push(record2);
        // this.recordList && this.recordList.push(record2);
        recordStore.saveRecord();
    }
};
recordStore.fetchRecords();

export default recordStore;