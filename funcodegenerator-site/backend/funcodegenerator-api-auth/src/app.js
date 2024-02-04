import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

// Routes
import indexRoutes from "./routes/index.routes.js";
import usersRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

// Settings
app.set("port", process.env.PORT || 4000);
app.set("json spaces", 4);

// Middlewares
app.use(
  cors(
    {
    origin: ["http://localhost:3000", "https://fun-code-generator-7jkh.vercel.app/", "https://www.funcodegenerator.me/"],
    methods: "GET,HEAD,PUT,PATCH,POST",
    credentials: true,
  }
  )
);

// Habilita las solicitudes preflight para todas las rutas
app.options("*", cors());

app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api", indexRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/auth", authRoutes);

export default app;
