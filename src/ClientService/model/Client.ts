import mongoose from 'mongoose';
import { ClientState } from '../types/enums';
import { ClientInterface } from '../types/interefaces';

const ClientsSchema = new mongoose.Schema<ClientInterface>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    state: {
      type: ClientState,
      default: ClientState.active
    },
  },
  {
    collection: 'clients',
    timestamps: true,
  },
);

const Clients = mongoose.model('Client', ClientsSchema);
export default Clients;
