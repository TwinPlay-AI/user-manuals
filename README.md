# TwinPlay User Manuals

## Development

### With Dev Container (Recommended)

1. Requirements: `Docker >=24`
2. Open the project in Visual Studio Code
3. Install the Dev Containers extension
4. Reopen in container when prompted
5. Website automatically starts at [http://localhost:3000](http://localhost:3000)

### Without Dev Container

1. **Requirements**

   | pkg    | version |
   | ------ | ------- |
   | Docker | `>=24`  |
   | Node   | `>=22`  |
   | Yarn   | `^1.22` |

2. **Setup the project:**

   ```bash
   just setup
   ```

3. **Start development server:**

   ```bash
   just dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)
