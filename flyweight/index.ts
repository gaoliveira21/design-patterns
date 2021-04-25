import { MusicService } from './services/MusicService'

const player = new MusicService();
player.listenMusic('User A', 'The Unfforgiven;Mettalica;300');
player.listenMusic('User A', 'The Unfforgiven;Mettalica;300');
player.listenMusic('User A', 'The Unfforgiven;Mettalica;300');
player.listenMusic('User A', 'Be Yourself;Audioslave;200');
player.listenMusic('User B', 'The Unfforgiven;Mettalica;300');
player.listenMusic('User B', 'Be Yourself;Audioslave;200');

player.report();