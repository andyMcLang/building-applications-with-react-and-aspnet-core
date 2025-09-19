import axios from "axios";
import { urlAccounts } from "../endpoints";
import Button from "../utils/Button";
import custonConfirm from "../utils/customConfirm";
import IndexEntity from "../utils/IndexEntity";
import { userDTO } from "./auth.models";
import Swal from "sweetalert2";

export default function IndexUsers() {
  async function makeAdmin(id: string) {
    await doAdmin(`${urlAccounts}/makeAdmin`, id);
  }

  async function removeAdmin(id: string) {
    await doAdmin(`${urlAccounts}/removeAdmin`, id);
  }

  async function doAdmin(url: string, id: string) {
    await axios.post(url, JSON.stringify(id), {
      headers: { "Content-Type": "application/json" },
    });

    Swal.fire({
      title: "Onnea!",
      text: "Toimenpide suoritettu onnistuneesti",
      icon: "success",
    });
  }

  return (
    <IndexEntity<userDTO> title="Users" url={`${urlAccounts}/listUsers`}>
      {(users) => (
        <>
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>
                  <Button
                    onClick={() =>
                      custonConfirm(
                        () => makeAdmin(user.id),
                        `Haluatko varmasti tehdä käyttäjästä ${user.email} adminin?`,
                        `Tee ${user.email} adminiksi`
                      )
                    }
                  >
                    Luo Admin
                  </Button>

                  <Button
                    className="btn btn-danger ms-2"
                    onClick={() =>
                      custonConfirm(
                        () => removeAdmin(user.id),
                        `Haluatko varmasti poistaa käyttäjän ${user.email} admin-oikeudet?`,
                        `Poista ${user.email} admin-oikeudet`
                      )
                    }
                  >
                    Poista Admin
                  </Button>
                </td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </>
      )}
    </IndexEntity>
  );
}
