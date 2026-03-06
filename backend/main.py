from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from .routers import leads, quotations, bookings
from .middleware.tenant import extract_tenant
import firebase_admin
from firebase_admin import credentials, firestore

# Initialize Firebase (MOCK IMPLEMENTATION for skeleton)
# cred = credentials.Certificate('path/to/serviceAccountKey.json')
# firebase_admin.initialize_app(cred)
# db = firestore.client()

app = FastAPI(title="Workshop Management API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Update this in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.middleware("http")
async def add_process_time_header(request: Request, call_next):
    # Apply tenant middleware to all API routes
    if request.url.path.startswith("/api"):
        await extract_tenant(request)

    response = await call_next(request)
    return response

app.include_router(leads.router, prefix="/api")
app.include_router(quotations.router, prefix="/api")
app.include_router(bookings.router, prefix="/api")

@app.get("/")
async def root():
    return {"message": "Workshop API is running"}
