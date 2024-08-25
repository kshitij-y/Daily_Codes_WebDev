import { atom, selector } from 'recoil'

export const networkAtom = atom({
    key: "networkAtom",
    default: 104
});
export const jobsAtom = atom({
    key: "jobsAtom",
    default: 13
});
export const notiAtom = atom({
    key: "notiAtom",
    default: 109
});
export const msgAtom = atom({
    key: "msgAtom",
    default: 104
});

export const  totalNoti = selector({
    key: "totalNoti",
    get: ({get}) => {
        const netCount = get(networkAtom);
        const jobCount = get(jobsAtom);
        const notiCount = get(notiAtom);
        const msgCount = get(msgAtom);
        return netCount + jobCount + notiCount + msgCount;
    }
})