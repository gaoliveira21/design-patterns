import { HDMIToOldMonitorAdapter } from "./adapters/HDMIToOldMonitorAdapter";
import { HDMIToVGAAdapter } from "./adapters/HDMIToVGAAdapter";
import { Computer } from "./devices/Computer";
import { OldMonitor } from "./devices/OldMonitor";
import { TV } from "./devices/TV";

const tv = new TV()
const pc = new Computer(tv);
pc.sendImageAndSound('Cat and rainbow', 'Nyan cat song')

console.log('------- Monitor -------')

const monitor = new OldMonitor()
const pc2 = new Computer(new HDMIToVGAAdapter(monitor))
pc2.sendImageAndSound('Cat and rainbow', 'Nyan cat song')

console.log('------ Monitor Class Adapter ----------')

const monitorAdapter = new HDMIToOldMonitorAdapter();
const pc3 = new Computer(monitorAdapter)
pc2.sendImageAndSound('Cat and rainbow', 'Nyan cat song')
